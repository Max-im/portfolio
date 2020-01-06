import db from "../db";

export const returnSocial = (req, res) => {
  return db
    .query(`SELECT * FROM social`)
    .then(({ rows }) => res.json(rows))
    .catch(err => res.status(400).json(err));
};
