import { Router } from "express";
import client from "../db";

const router = Router();

/**
 * Login
 */
router.post("/", async (req, res, next) => {
  const { email, gId, name, avatar } = req.body;
  const { rows: theUser } = await client
    .query("SELECT * FROM users WHERE gId=$1", [gId])
    .catch(err => next(err));

  // return existing user
  if (theUser[0]) return res.json({ ...theUser[0] });

  // create new User
  client
    .query(
      "INSERT INTO users(name, email, gId, avatar) VALUES ($1, $2, $3, $4) RETURNING isadmin",
      [name, email, gId, avatar]
    )
    .then(({ rows }) => res.json({ ...req.body, isadmin: rows[0].isadmin }))
    .catch(err => next(err));

  return null;
});

module.exports = router;
