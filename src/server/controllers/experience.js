import client from "../db";

/**
 * @type middleware
 * @description return all experience data
 */
export const getAllExp = (req, res, next) => {
  client
    .query(`SELECT * FROM experience ORDER BY range DESC`)
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description create new experience item
 */
export const createExp = (req, res, next) => {
  client
    .query(
      `INSERT INTO experience(exp_title, exp_company, exp_from, exp_to, exp_is_current, exp_image, exp_description)
          VALUES($1, $2, $3, $4, $5, $6, $7)`,
      [
        req.body.exp_title,
        req.body.exp_company,
        req.body.exp_from,
        req.body.exp_to,
        req.body.exp_is_current,
        req.body.exp_image,
        req.body.exp_description
      ]
    )
    .then(() => res.end())
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description get particular experience item
 * @path UPDATE
 */
export const getCurrentExp = (req, res, next) => {
  const { id } = req.body;

  client
    .query(
      `SELECT exp_title, exp_company, exp_from, exp_to, exp_is_current, exp_image, exp_description 
        FROM experience 
        WHERE id=$1`,
      [id]
    )
    .then(({ rows }) => {
      req.body.currentExp = rows[0];
      return next();
    })
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description retrieve fields to update
 * @path UPDATE
 */
export const retrieveFieldsToUpdate = (req, res, next) => {
  const { currentExp } = req.body;
  const toUpdate = {};

  Object.keys(currentExp).map(key => {
    if (currentExp[key] !== req.body[key]) toUpdate[key] = req.body[key];
    return null;
  });

  res.body.toUpdate = toUpdate;
  return next();
};

/**
 * @type middleware
 * @description update appropriete fields
 * @path UPDATE
 */
export const updateExp = (req, res, next) => {
  const { toUpdate, id } = req.body;

  Promise.all(
    Object.keys(toUpdate).map(key => {
      return client.query(
        `UPDATE experience 
            SET ${key}=($1) 
            WHERE id=$2`,
        [toUpdate[key], id]
      );
    })
  )
    .then(() => res.end())
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description delete experience item by id
 */
export const deleteExp = (req, res, next) => {
  client
    .query(`DELETE FROM experience WHERE id=$1`, [req.params.id])
    .then(() => res.end())
    .catch(err => next(err));
};
