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

module.exports = router;
