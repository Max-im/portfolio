import { Router } from "express";
import client from "../db";
import { checkAdminPermission } from "../controllers/permission";

const router = Router();

/**
 * get education
 */
router.get("/", (req, res, next) => {
  client
    .query("SELECT * FROM education ORDER BY range DESC")
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
});

router.delete("/:id", checkAdminPermission, (req, res, next) => {
  client
    .query(`DELETE FROM education WHERE id=$1`, [req.params.id])
    .then(() => res.end())
    .catch(err => next(err));
});

router.post("/", checkAdminPermission, (req, res, next) => {
  const { edu_photo, edu_title, edu_description } = req.body;

  client
    .query(
      `INSERT INTO education(edu_photo, edu_title, edu_description) 
       VALUES($1, $2, $3)`,
      [edu_photo, edu_title, edu_description]
    )
    .then(() => res.end())
    .catch(err => next(err));
});

router.put("/", checkAdminPermission, async (req, res, next) => {
  const { id, edu_photo, range, edu_title, edu_description } = req.body;

  // get current db data
  const current = await client
    .query(
      `SELECT  edu_photo, range, edu_title, edu_description FROM education WHERE id=$1`,
      [id]
    )
    .catch(err => next(err));

  // retrieve fields to update
  const toUpdate = {};
  const currentEdu = current.rows[0];
  Object.keys(currentEdu).map(key => {
    if (currentEdu[key] !== req.body[key]) toUpdate[key] = req.body[key];
    return null;
  });

  // update
  Promise.all(
    Object.keys(toUpdate).map(key => {
      return client.query(`UPDATE education SET ${key}=($1) WHERE id=$2`, [
        toUpdate[key],
        id
      ]);
    })
  )
    .then(() => res.end())
    .catch(err => next(err));
});

module.exports = router;
