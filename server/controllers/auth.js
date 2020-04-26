import jwt from 'jsonwebtoken';
import client from '../db';

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
    .catch(next);
};

export const createNewUser = (req, res, next) => {
  const { email, gId, name, avatar, theUser } = req.body;
  if (theUser) return next();

  return client
    .query(
      `INSERT INTO users(name, email, gid, avatar) 
        VALUES ($1, $2, $3, $4) 
        RETURNING isadmin, name, email, gid, avatar`,
      [name, email, gId, avatar]
    )
    .then(({ rows }) => {
      req.body.theUser = rows[0];
      next();
    })
    .catch(next);
};

export const returnToken = (req, res) => {
  const { theUser } = req.body;
  const options = { expiresIn: 3600 };

  const access_token = jwt.sign(
    { sub: theUser.id, payload: theUser },
    process.env.SECRET_OR_KEY,
    options
  );

  return res.json({ access_token });
};
