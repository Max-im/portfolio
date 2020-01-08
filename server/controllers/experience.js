import client from "../db";

export const getExperience = (req, res) => {
  res.json([
    {
      id: 1,
      title: "Specialist",
      company: "PrivateBank",
      from: "2006-03-01",
      to: "2007-06-01",
      isCurrent: false,
      icon: "privatbank.png",
      description: "Conclusion of loan agreements; Attraction of consumers"
    },
    {
      id: 2,
      title: "Economist - Head of Labor and Wages Department",
      company: "Regional gas company",
      from: "2007-06-01",
      to: "2014-09-01",
      isCurrent: false,
      icon: "gorgaz.png",
      description:
        "Control of the work of the department; Development of a part of the budget in terms of FOT and the number of staff; Calculated cost; Conducting competitive bidding procedures; Conducting time and photos of working hours; Check the time sheets; Preparation of periodic reports"
    },
    {
      id: 3,
      title: "Engineer on the organization and standardization of work",
      company: "Chernobyl nuclear power plant",
      from: "2014-09-15",
      to: "2018-01-08",
      isCurrent: false,
      icon: "chnpp.png",
      description:
        "Participation in performance appraisal of workplaces; Performance of works on tariffing; Carrying out works aimed at maintaining the level of labor standardization at the enterprise; Check of official and working instructions"
    },
    {
      id: 4,
      title: "JS Developer",
      company: "iDeals solutions",
      from: "2018-01-09",
      to: "2019-09-06",
      isCurrent: false,
      icon: "ideals.png",
      description:
        "Develop and maintain applications, chrome extensions and google add-ons; Use in my work: React, Redux, Vue, MongoDB, PostgreSQL, Nodejs"
    },
    {
      id: 5,
      title: "Web Develper",
      company: "Astound Commerce",
      from: "2019-09-09",
      to: null,
      isCurrent: true,
      icon: "astound.png",
      description:
        "Develop complicated E-Commerce Solutions on Demandware platphorm"
    }
  ]);
};

/**
 * @type middleware
 * @description return all experience data
 */
export const getAllExp = (req, res, next) => {
  client
    .query(`SELECT * FROM experience ORDER BY exp_from DESC`)
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
        req.body.filename,
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
