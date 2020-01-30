import db from '../db';

export const getExperience = (req, res) => {
  db.query(`
    SELECT id, title, company, from_date AS from, icon, is_current AS isCurrent, description, to_date AS to 
    FROM experience 
    ORDER BY to_date DESC
  `)
    .then(({ rows }) => res.json(rows))
    .catch(err => res.status(401).json(err));
};



/**
 * @type middleware
 * @description create new experience item
 */
// export const createExp = (req, res, next) => {
//   db
//     .query(
//       `INSERT INTO experience(exp_title, exp_company, exp_from, exp_to, exp_is_current, exp_image, exp_description)
//           VALUES($1, $2, $3, $4, $5, $6, $7)`,
//       [
//         req.body.exp_title,
//         req.body.exp_company,
//         req.body.exp_from,
//         req.body.exp_to,
//         req.body.exp_is_current,
//         req.body.filename,
//         req.body.exp_description
//       ]
//     )
//     .then(() => res.end())
//     .catch(err => next(err));
// };



/**
 * @type middleware
 * @description update appropriete fields
 * @path UPDATE
 */
// export const updateExp = (req, res, next) => {
//   const { toUpdate, id } = req.body;

//   Promise.all(
//     Object.keys(toUpdate).map(key => {
//       return client.query(
//         `UPDATE experience 
//             SET ${key}=($1) 
//             WHERE id=$2`,
//         [toUpdate[key], id]
//       );
//     })
//   )
//     .then(() => res.end())
//     .catch(err => next(err));
// };

/**
 * @type middleware
 * @description delete experience item by id
 */
// export const deleteExp = (req, res, next) => {
//   client
//     .query(`DELETE FROM experience WHERE id=$1`, [req.params.id])
//     .then(() => res.end())
//     .catch(err => next(err));
// };
