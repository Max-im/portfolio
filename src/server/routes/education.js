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

module.exports = router;
