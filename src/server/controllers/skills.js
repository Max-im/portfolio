import Jimp from "jimp";
import client from "../db";

/**
 * @type middleware
 * @description get all categories
 */
export const getCategories = (req, res) => {
  client
    .query(`SELECT * FROM skills_categories`)
    .then(({ rows }) => res.json(rows))
    .catch(err => res.status(400).json(err));
};

/**
 * @type middleware
 * @description get all skills
 */
export const getSkills = (req, res) => {
  client
    .query("SELECT * FROM skills")
    .then(({ rows }) => res.json(rows))
    .catch(err => res.status(400).json(err));
};

/**
 * @type middleware
 * @description create new skill
 */
export const createSkill = (req, res) => {
  const { skill, range, source, category_id, filename } = req.body;
  client
    .query(
      `INSERT INTO skills(skill_picture, skill, range, source, category_id) 
        VALUES($1, $2, $3, $4, $5) 
        RETURNING id, skill_picture, skill, range, source, category_id`,
      [filename, skill, range, source, category_id]
    )
    .then(({ rows }) => res.json(rows[0]))
    .catch(err => res.status(400).json(err));
};

/**
 * @type middleware
 * @description create new category
 */
export const createCategory = (req, res) => {
  const { range, category } = req.body;

  client
    .query(
      `INSERT INTO skills_categories(range, category) 
        VALUES($1, $2) 
        RETURNING id, range, category`,
      [range, category]
    )
    .then(({ rows }) => res.json(rows[0]))
    .catch(err => res.status(400).json(err));
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
    .catch(err => res.status(400).json(err));
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

export const updateSkill = (req, res) => {
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
    .catch(err => res.status(400).json(err));
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
    .then(() => next())
    .catch(err => res.status(400).json(err));
};

/**
 * @type middleware
 * @description delete category by id
 */
export const deleteCategory = (req, res) => {
  client
    .query(`DELETE FROM skills_categories WHERE id=$1`, [req.params.id])
    .then(() => res.end())
    .catch(err => res.status(400).json(err));
};

/**
 * @type middleware
 * @description delete project skills
 */
export const deleteProjectSkills = (req, res, next) => {
  client
    .query(`DELETE FROM projects_skills WHERE skill_id=$1`, [req.params.id])
    .then(() => next())
    .catch(err => res.status(400).json(err));
};

/**
 * @type middleware
 * @description delete skill by id
 */
export const deleteSkill = (req, res) => {
  client
    .query(`DELETE FROM skills WHERE id=$1`, [req.params.id])
    .then(() => res.end())
    .catch(err => res.status(400).json(err));
};

/**
 * @type middleware
 * @description delete projects_skills item  by id category id
 */
export const deleteProjectSkillsByCategory = (req, res, next) => {
  client
    .query(
      `DELETE FROM projects_skills 
        WHERE skill_id IN 
        (SELECT id FROM skills WHERE category_id=$1)`,
      [req.params.id]
    )
    .then(() => next())
    .catch(err => res.status(400).json(err));
};
