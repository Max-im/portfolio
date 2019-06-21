import { Router } from "express";
import client from "../db";

const router = Router();

/**
 * get skills
 */
router.get("/", (req, res, next) => {
  client
    .query(
      "SELECT * FROM skills_categories  INNER JOIN skills ON skills_categories.id = skills.category_id ORDER BY category_id"
    )
    .then(({ rows }) => res.json(rows))
    .catch(err => console.log(err));
});

module.exports = router;
