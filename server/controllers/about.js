import db from '../db';

export const getAbout = (req, res) => {
  db.query(`SELECT name, title, social, avatar, summary, contacts, last_name AS lastName FROM about`)
    .then(({rows}) => res.json(rows[0]))
    .catch(err => console.log(err))
};
