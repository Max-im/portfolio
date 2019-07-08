import { Router } from "express";
import client from "../db";

const router = Router();

/**
 * get contacts
 */
router.get("/", (req, res, next) => {
  client
    .query("SELECT * FROM contacts")
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  client
    .query("DELETE FROM contacts WHERE id=$1", [id])
    .then(() => res.end())
    .catch(err => next(err));
});

module.exports = router;
