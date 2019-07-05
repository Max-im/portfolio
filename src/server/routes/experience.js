import { Router } from "express";
import client from "../db";

const router = Router();

/**
 * get experience
 */
router.get("/", (req, res, next) => {
  client
    .query("SELECT * FROM experience ORDER BY id DESC")
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
});

router.delete("/:id", (req, res, next) => {
  client
    .query("DELETE FROM experience WHERE id=$1", [req.params.id])
    .then(() => res.end())
    .catch(err => next(err));
});

router.post("/", (req, res, next) => {
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

module.exports = router;
