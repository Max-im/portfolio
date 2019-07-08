import { Router } from "express";
import { checkAdminPermission } from "../controllers/permission";

import client from "../db";

const router = Router();

/**
 * get experience
 */
router.get("/", (req, res, next) => {
  client
    .query("SELECT * FROM experience ORDER BY range DESC")
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
});

router.delete("/:id", checkAdminPermission, (req, res, next) => {
  client
    .query("DELETE FROM experience WHERE id=$1", [req.params.id])
    .then(() => res.end())
    .catch(err => next(err));
});

router.post("/", checkAdminPermission, (req, res, next) => {
  const {
    exp_title,
    exp_company,
    exp_from,
    exp_to,
    exp_is_current,
    exp_image,
    exp_description
  } = req.body;
  client
    .query(
      `INSERT INTO experience(exp_title, exp_company, exp_from, exp_to, exp_is_current, exp_image, exp_description)
        VALUES($1, $2, $3, $4, $5, $6, $7)`,
      [
        exp_title,
        exp_company,
        exp_from,
        exp_to,
        exp_is_current,
        exp_image,
        exp_description
      ]
    )
    .then(() => res.end())
    .catch(err => next(err));
});

router.put("/", checkAdminPermission, async (req, res, next) => {
  const { id } = req.body;

  // get db exp
  const current = await client
    .query(
      `SELECT exp_title,  exp_company,  exp_from,  exp_to,  exp_is_current,  exp_image,  exp_description 
      FROM experience 
      WHERE id=$1`,
      [id]
    )
    .catch(err => next(err));

  // retrieve fields to update
  const theExp = current.rows[0];
  const toUpdate = {};
  Object.keys(theExp).map(key => {
    if (theExp[key] !== req.body[key]) toUpdate[key] = req.body[key];
    return null;
  });

  // update
  Promise.all(
    Object.keys(toUpdate).map(key => {
      return client.query(`UPDATE experience SET ${key}=($1) WHERE id=$2`, [
        toUpdate[key],
        id
      ]);
    })
  )
    .then(() => res.end())
    .catch(err => next(err));
});

module.exports = router;
