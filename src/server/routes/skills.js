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

module.exports = router;
