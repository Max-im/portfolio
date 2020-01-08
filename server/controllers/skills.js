import fs from "fs";
import client from "../db";

/**
 * @type middleware
 * @description get all categories
 */
export const getCategories = (req, res) => {
  res.json([
    { id: 1, name: "Frontend" },
    { id: 2, name: "Backend" },
    { id: 3, name: "Database" },
    { id: 4, name: "Tests" },
    { id: 5, name: "Other" }
  ]);
};

/**
 * @type middleware
 * @description get all skills
 */
export const getSkills = (req, res) => {
  res.json([
    {
      name: "react",
      category: "Frontend",
      id: 1,
      icon: "react.png",
      url: "https://reactjs.org/"
    },
    {
      name: "redux",
      category: "Frontend",
      id: 2,
      icon: "redux.png",
      url: "https://redux.js.org/"
    },
    {
      name: "vue",
      category: "Other",
      id: 3,
      icon: "vue.png",
      url: "https://vuejs.org/"
    },
    {
      name: "ts",
      category: "Backend",
      id: 4,
      icon: "ts.png",
      url: "https://www.typescriptlang.org/"
    },
    {
      name: "node",
      category: "Backend",
      id: 5,
      icon: "node.png",
      url: "https://nodejs.org/en/"
    },
    {
      name: "rest",
      category: "Database",
      id: 6,
      icon: "rest.png",
      url: "https://developer.mozilla.org/en-US/docs/Glossary/REST"
    },
    {
      name: "mongodb",
      category: "Database",
      id: 7,
      icon: "mongodb.png",
      url: "https://www.mongodb.com/"
    },
    {
      name: "postgres",
      category: "Tests",
      id: 8,
      icon: "psql.png",
      url: "https://www.postgresql.org/"
    },
    {
      name: "sequelize",
      category: "Tests",
      id: 9,
      icon: "sequelize.png",
      url: "https://sequelize.org/"
    },
    {
      name: "mocha",
      category: "Other",
      id: 10,
      icon: "mocha.png",
      url: "https://mochajs.org/"
    }
  ]);
};

// ////////////////////////////////////////////////////////////

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
    .query(`DELETE FROM skills WHERE id=$1 RETURNING skill_picture`, [
      req.params.id
    ])
    .then(({ rows }) => {
      const { skill_picture } = rows[0];
      fs.unlink(`uploads/${skill_picture}`, err => err && console.log(err));
      res.end();
    })
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
