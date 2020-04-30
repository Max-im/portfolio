const jwt = require('jsonwebtoken');
const db = require('../db');

export const isLoggedIn = (req, res, next) => {
  const tokenStr = req.get('Authorization');
  if (!tokenStr) return next(401);
  let decoded;

  try {
    const token = JSON.parse(tokenStr);
    decoded = jwt.verify(token, process.env.SECRET_OR_KEY);
  } catch (err) {
    return next(401);
  }
  req.userToken = decoded;
  return next();
};

export const isAdmin = (req, res, next) => {
  isLoggedIn(req, res, next);
  const { decoded } = req.userToken;

  const { gid } = decoded.payload;
  return db
    .query(`SELECT isadmin FROM users WHERE gid=$1`, [gid])
    .then(({ rows }) => {
      if (!rows[0]) next(403);
      if (!rows[0].isadmin) next(403);
      return next();
    })
    .catch(next);
};
