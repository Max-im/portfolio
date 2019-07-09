import client from "../db";

/**
 * @type middleware
 * @description get all categories
 */
export const getCategories = (req, res, next) => {
  client
    .query(`SELECT * FROM skills_categories`)
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description get all skills by categories
 */
export const getSkills = (req, res, next) => {
  client
    .query(
      `SELECT s.id, skill_picture, skill, source, category_id, category, s.range
        FROM skills AS s 
        JOIN skills_categories AS c 
        ON s.category_id = c.id 
        ORDER BY c.range, s.range`
    )
    .then(({ rows }) => {
      req.body.skills = rows;
      return next();
    })
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description formate skills
 */
export const formateSkills = (req, res, next) => {
  const { skills } = req.body;
  const formated = {};

  skills.forEach(item => {
    const { category } = item;
    if (!formated[category]) formated[category] = [];
    formated[category].push({ ...item });
  });

  res.json(formated);
};

/**
 * @type middleware
 * @description create new skill
 */
export const createSkill = (req, res, next) => {
  const { skill_picture, skill, range, source, category_id } = req.body;
  client
    .query(
      `INSERT INTO skills(skill_picture, skill, range, source, category_id) 
        VALUES($1, $2, $3, $4, $5)`,
      [skill_picture, skill, range, source, category_id]
    )
    .then(() => res.end())
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description create new category
 */
export const createCategory = (req, res, next) => {
  const { range, category } = req.body;

  client
    .query(
      `INSERT INTO skills_categories(range, category) 
        VALUES($1, $2)`,
      [range, category]
    )
    .then(() => res.end())
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description get particular skill data
 */
export const getCurrentSkill = (req, res, next) => {
  client
    .query(
      `SELECT skill, skill_picture, source, range, category_id FROM skills WHERE id=$1`,
      [req.body.id]
    )
    .then(({ rows }) => {
      req.body.currentSkill = rows[0];
      return next();
    })
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description get particular skill data
 */
export const retrieveFieldsToUpdate = (req, res, next) => {
  const { currentSkill } = req.body;
  const toUpdate = {};

  Object.keys(currentSkill).map(key => {
    if (req.body[key] !== currentSkill[key]) toUpdate[key] = req.body[key];
    return null;
  });

  req.body.toUpdate = toUpdate;
  return next();
};

export const updateSkill = (req, res, next) => {
  const { toUpdate, id } = req.body;

  Promise.all(
    Object.keys(toUpdate).map(key => {
      return client.query(`UPDATE skills SET ${key}=$1 WHERE id=$2`, [
        toUpdate[key],
        id
      ]);
    })
  )
    .then(() => res.end())
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description delete all skills, related to the category
 */
export const deleteCategorySkills = (req, res, next) => {
  client
    .query(`DELETE FROM skills WHERE category_id=$1 RETURNING id`, [
      req.params.id
    ])
    .then(({ rows }) => next())
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description delete category by id
 */
export const deleteCategory = (req, res, next) => {
  client
    .query(`DELETE FROM skills_categories WHERE id=$1`, [req.params.id])
    .then(() => res.end())
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description delete project skills
 */
export const deleteProjectSkills = (req, res, next) => {
  client
    .query(`DELETE FROM projects_skills WHERE skill_id=$1`, [req.params.id])
    .then(() => next())
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description delete skill by id
 */
export const deleteSkill = (req, res, next) => {
  client
    .query(`DELETE FROM skills WHERE id=$1`, [req.params.id])
    .then(() => res.end())
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description delete projects_skills item  by id category id
 */
export const deleteProjectSkillsByCategory = async (req, res, next) => {
  client
    .query(
      `DELETE FROM projects_skills 
        WHERE skill_id IN 
        (SELECT id FROM skills WHERE category_id=$1)`,
      [req.params.id]
    )
    .then(() => next())
    .catch(err => next(err));
};
