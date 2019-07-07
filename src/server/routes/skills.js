import { Router } from "express";
import client from "../db";
import { checkAdminPermission } from "../controllers/permission";

const router = Router();

/**
 * get skills
 */
router.get("/", (req, res, next) => {
  client
    .query("SELECT * FROM skills_categories")
    .then(({ rows }) => {
      Promise.all(
        rows.map(item =>
          client.query("SELECT * FROM skills WHERE category_id=$1", [item.id])
        )
      )
        .then(([frd, bnd, db, tst, oth]) => {
          const { rows: frontend } = frd;
          const { rows: backend } = bnd;
          const { rows: database } = db;
          const { rows: test } = tst;
          const { rows: other } = oth;
          res.json({ frontend, backend, database, test, other });
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

/**
 * get categories
 */
router.get("/categories", checkAdminPermission, (req, res, next) => {
  client
    .query("SELECT * FROM skills_categories")
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
});

/**
 * get admin skills
 */
router.get("/admin", checkAdminPermission, (req, res, next) => {
  client
    .query(
      `SELECT s.id, skill, skill_picture, s.range, source, category
       FROM skills AS s 
       JOIN skills_categories AS c 
       ON s.category_id=c.id`
    )
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
});

router.delete("/:id", checkAdminPermission, async (req, res) => {
  await client.query(`DELETE FROM projects_skills AS ps WHERE ps.skill_id=$1`, [
    req.params.id
  ]);

  await client.query(`DELETE FROM skills AS s WHERE s.id=$1`, [req.params.id]);

  res.end();
});

router.post("/", checkAdminPermission, (req, res, next) => {
  const { skill_picture, skill, range, source, category_id } = req.body;
  client
    .query(
      `INSERT INTO skills(skill_picture, skill, range, source, category_id) VALUES($1, $2, $3, $4, $5)`,
      [skill_picture, skill, range, source, category_id]
    )
    .then(() => res.end())
    .catch(err => next(err));
});

router.post("/category", checkAdminPermission, (req, res, next) => {
  const { range, category } = req.body;
  client
    .query("INSERT INTO skills_categories(range, category) VALUES($1, $2)", [
      range,
      category
    ])
    .then(() => res.end())
    .catch(err => next(err));
});

router.put("/", checkAdminPermission, async (req, res, next) => {
  const { id } = req.body;
  // get current db skill
  const current = await client.query(
    `SELECT skill, skill_picture, source, range, category_id FROM skills WHERE id=$1`,
    [id]
  );

  // retrieve fields to update
  const toUpdate = {};
  const curentSkill = current.rows[0];
  Object.keys(curentSkill).map(key => {
    if (req.body[key] !== curentSkill[key]) toUpdate[key] = req.body[key];
    return null;
  });

  // update
  return Promise.all(
    Object.keys(toUpdate).map(key => {
      return client.query(`UPDATE skills SET ${key}=$1 WHERE id=$2`, [
        toUpdate[key],
        id
      ]);
    })
  )
    .then(() => res.end())
    .catch(err => next(err));
});

router.delete("/category/:id", checkAdminPermission, async (req, res) => {
  const { id } = req.params;

  // delete categories skills
  await client.query("DELETE FROM skills WHERE category_id=$1", [id]);

  // delete category
  await client.query("DELETE FROM skills_categories WHERE id=$1", [id]);

  res.end();
});

module.exports = router;
