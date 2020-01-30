import db from '../db';

export const getEducation = (req, res, next) => {
  db.query(`SELECT * FROM education`)
    .then(({rows}) => res.json(rows))
    .catch(err => next(err));
};

// export const createEdu = (req, res, next) => {
//   const { filename, edu_title, edu_description } = req.body;

//   client
//     .query(
//       `INSERT INTO education(edu_photo, edu_title, edu_description) 
//        VALUES($1, $2, $3)`,
//       [filename, edu_title, edu_description]
//     )
//     .then(() => res.end())
//     .catch(err => next(err));
// };

/**
 * @type middleware
 * @description update appropriete fields
 * @path /UPDATE/:id
 */
// export const updateEdu = (req, res, next) => {
//   const { toUpdate, id } = req.body;

//   Promise.all(
//     Object.keys(toUpdate).map(key => {
//       return client.query(
//         `UPDATE education 
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
 * @description delete edu item by id
 * @path /DELETE/:id
 */
// export const deleteEdu = (req, res, next) => {
//   client
//     .query(`DELETE FROM education WHERE id=$1`, [req.params.id])
//     .then(() => res.end())
//     .catch(err => next(err));
// };
