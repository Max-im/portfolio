import jwt from "jsonwebtoken";
import client from "../db";

/**
 * @description find
 */
export const getExistingUser = (req, res, next) => {
  const { gId } = req.body;

  client
    .query(`SELECT * FROM users WHERE gId=$1`, [gId])
    .then(({ rows }) => {
      if (rows[0]) req.body.theUser = rows[0];
      return next();
    })
    .catch(err => next(err));
};

export const createNewUser = (req, res, next) => {
  const { email, gId, name, avatar, theUser } = req.body;
  if (theUser) return next();

  return client
    .query(
      `INSERT INTO users(name, email, gId, avatar) 
        VALUES ($1, $2, $3, $4) 
        RETURNING isadmin, name, email, gId, avatar`,
      [name, email, gId, avatar]
    )
    .then(({ rows }) => {
      req.body.theUser = rows[0];
      next();
    })
    .catch(err => next(err));
};

export const returnToken = (req, res) => {
  const { theUser } = req.body;
  const { id, name, avatar, isadmin, email, gId } = theUser;
  const access_token = jwt.sign(
    { sub: id, payload: { name, email, avatar, isadmin, gId, id } },
    process.env.SECRET_OR_KEY,
    { expiresIn: 3600 }
  );
  return res.json({ access_token });
};
