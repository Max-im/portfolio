import { Router } from "express";
import client from "../db";

const router = Router();

/**
 * get contacts
 */
router.post("/", (req, res, next) => {
  const { text, project_id, author_id } = req.body;

  client
    .query(
      "INSERT INTO comments(project_id, author_id, text) VALUES ($1, $2, $3)",
      [project_id, author_id, text]
    )
    .then(() => res.end())
    .catch(err => next(err));
});

module.exports = router;
