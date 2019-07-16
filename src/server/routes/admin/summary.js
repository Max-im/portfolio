import { Router } from "express";
import client from "../../db";
import { checkAdminPermission } from "../../controllers/permission";

const router = Router();

router.put("/", checkAdminPermission, (req, res, next) => {
  const { text, field } = req.body;
  client
    .query(`UPDATE summary SET ${field}=$1`, [text])
    .then(() => res.end())
    .catch(err => next(err));
});

module.exports = router;
