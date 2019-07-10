import { Router } from "express";
import client from "../db";
import { checkAdminPermission } from "../controllers/permission";

const router = Router();

router.get("/", (req, res, next) => {
  client
    .query("SELECT * FROM summary")
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
});

router.put("/", checkAdminPermission, (req, res, next) => {
  const { text, field } = req.body;

  console.log(field);

  client
    .query(`UPDATE summary SET ${field}=$1`, [text])
    .then(() => res.end())
    .catch(err => next(err));
});

module.exports = router;
