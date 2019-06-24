import { Router } from "express";
import client from "../db";

const router = Router();

router.get("/", (req, res, next) => {
  client
    .query("SELECT * FROM summary")
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
});

module.exports = router;
