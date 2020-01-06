import client from "../db";

/**
 * @type middleware
 * @description return all education items
 */
export const getAllEdu = (req, res, next) => {
  client
    .query(`SELECT * FROM education ORDER BY start_date DESC`)
    .then(({ rows }) => res.json(rows))
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description create new education item
 */
export const createEdu = (req, res, next) => {
  const { filename, edu_title, edu_description } = req.body;

  client
    .query(
      `INSERT INTO education(edu_photo, edu_title, edu_description) 
       VALUES($1, $2, $3)`,
      [filename, edu_title, edu_description]
    )
    .then(() => res.end())
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description get particular edu item data
 * @path /UPDATE/:id
 */
export const getCurrentEdu = (req, res, next) => {
  const { id } = req.body;

  // get current db data
  client
    .query(
      `SELECT edu_photo, range, edu_title, edu_description 
        FROM education 
        WHERE id=$1`,
      [id]
    )
    .then(({ rows }) => {
      req.body.currentEdu = rows[0];
      return next();
    })
    .catch(err => next(err));
};

/**
 * @type middleware
 * @description retrieve fields to update
 * @path /UPDATE/:id
 */
export const retrieveFieldsToUpdate = (req, res, next) => {
  const { currentEdu } = req.body;
  const toUpdate = {};

  Object.keys(currentEdu).map(key => {
    if (currentEdu[key] !== req.body[key]) toUpdate[key] = req.body[key];
    return null;
  });

  req.body.toUpdate = toUpdate;
  next();
};

/**
 * @type middleware
 * @description update appropriete fields
 * @path /UPDATE/:id
 */
export const updateEdu = (req, res, next) => {
  const { toUpdate, id } = req.body;

  Promise.all(
    Object.keys(toUpdate).map(key => {
      return client.query(
        `UPDATE education 
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
 * @description delete edu item by id
 * @path /DELETE/:id
 */
export const deleteEdu = (req, res, next) => {
  client
    .query(`DELETE FROM education WHERE id=$1`, [req.params.id])
    .then(() => res.end())
    .catch(err => next(err));
};
