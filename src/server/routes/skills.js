import { Router } from "express";
import client from "../db";

const router = Router();

/**
 * get skills
 */
router.get("/", (req, res, next) => {
  // client
  //   .query(
  //     "SELECT * FROM skills_categories  INNER JOIN skills ON skills_categories.id = skills.category_id ORDER BY category_id"
  //   )
  //   .then(({ rows }) => res.json(rows))
  //   .catch(err => console.log(err));

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

module.exports = router;
