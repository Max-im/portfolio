import { Router } from "express";
import client from "../db";

const router = Router();

/**
 * get education
 */
router.get("/", (req, res, next) => {
  client
    .query("SELECT * FROM education")
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
});

router.delete("/:id", (req, res, next) => {
  client
    .query(`DELETE FROM education WHERE id=$1`, [req.params.id])
    .then(() => res.end())
    .catch(err => next(err));
});

router.post("/", (req, res, next) => {
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

module.exports = router;
