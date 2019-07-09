import { Router } from "express";
import client from "../db";
import { checkAuthPermission } from "../controllers/permission";

const router = Router();

/**
 * create comment
 */
router.post("/", checkAuthPermission, (req, res, next) => {
  const { project_id, author_id, text } = req.body;

  client
    .query(
      `INSERT INTO comments(project_id, author_id, text) 
        VALUES ($1, $2, $3)`,
      [project_id, author_id, text]
    )
    .then(() => res.end())
    .catch(err => next(err));
});

module.exports = router;
