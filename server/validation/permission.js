const jwt = require('jsonwebtoken');
const db = require('../db');

function onError(statusCode = 500) {
  const errMap = {
    403: 'Access forbidden',
  };
  const message = errMap[statusCode] || 'Error Accoured';
  const err = new Error(message);
  err.statusCode = statusCode;
  return err;
}

export const isAdmin = (req, res, next) => {
  const tokenStr = req.get('Authorization');
  if (!tokenStr) return next(onError(403));

  let decoded;
  try {
    const token = JSON.parse(tokenStr);
    decoded = jwt.verify(token, process.env.SECRET_OR_KEY);
  } catch (err) {
    return next(onError(403));
  }

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
