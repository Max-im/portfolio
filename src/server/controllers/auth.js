import client from "../db";

export const getExistingUser = (req, res, next) => {
  const { gId } = req.body;

  client
    .query(
      `SELECT * 
        FROM users 
        WHERE gId=$1`,
      [gId]
    )
    .then(({ rows }) => {
      const [user] = rows;
      if (user) return res.json({ ...user });
      return next();
    })
    .catch(err => next(err));
};

export const createNewUser = (req, res, next) => {
  const { email, gId, name, avatar } = req.body;
  client
    .query(
      `INSERT INTO users(name, email, gId, avatar) 
        VALUES ($1, $2, $3, $4) 
        RETURNING isadmin`,
      [name, email, gId, avatar]
    )
    .then(({ rows }) => res.json({ ...req.body, isadmin: rows[0].isadmin }))
    .catch(err => next(err));
};
