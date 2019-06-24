import { Router } from "express";
import client from "../db";

const router = Router();

router.get("/", (req, res, next) => {
  client
    .query("SELECT * FROM projects")
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
});

router.get("/:id", (req, res, next) => {
  client
    .query("SELECT * FROM projects WHERE id=$1", [req.params.id])
    .then(({ rows }) => {
      if (rows.length === 1) return res.json(rows[0]);
      else res.status(404).json({ project: "not found" });
    })
    .catch(err => next(err));
});

module.exports = router;
