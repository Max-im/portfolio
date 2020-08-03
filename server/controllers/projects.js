import db from '../db';

export const getProjectsNumber = (req, res, next) => {
  const qualityCondition = req.query.quality
    ? `JOIN projectlevels AS l ON l.id = p.level 
      WHERE l.level = '${req.query.quality.replace(/,/g, "' OR l.level = '")}'`
    : '';

  db.query(`SELECT COUNT(*) FROM projects AS p ${qualityCondition}`)
    .then(({ rows }) => res.json(rows[0].count))
    .catch((err) => next(err));
};

export const getPageProjects = (req, res, next) => {
  const page = req.params.page || 1;
  const amount = req.query.amount || 12;
  let sort = 'level, title';
  if (req.query.sort) {
    if (req.query.sort === 'title') sort = 'title';
    if (req.query.sort === 'date') sort = 'date, title';
  }
  const qualityCondition = req.query.quality
    ? `WHERE l.level = '${req.query.quality.replace(/,/g, "' OR l.level = '")}'`
    : '';

  db.query(
    `SELECT p.id, p.title, p.picture, p.description, p.date, p.source, l.level
    FROM projects AS p 
    JOIN projectlevels AS l 
    ON l.id = p.level
    JOIN projects_skills AS ps 
    ON ps.project_id = p.id
    ${qualityCondition}
    GROUP BY p.id, l.level
    ORDER BY ${sort}
    LIMIT $1
    OFFSET $2
  `,
    [amount, (page - 1) * amount]
  )
    .then(({ rows }) => res.json(rows))
    .catch((err) => next(err));
};

export const getProjectRate = (req, res, next) => {
  db.query(
    `SELECT user_id AS userid, vote
    FROM projects_rate
    WHERE project_id = $1`,
    [req.params.id]
  )
    .then(({ rows }) => {
      const positive = rows.filter((item) => item.vote);
      const negative = rows.filter((item) => !item.vote);
      res.json({ positive, negative });
    })
    .catch(next);
};

// `SELECT p.id, title, p.picture, description, date, source, comments, rate, l.level, json_agg(s.*) AS "skills",
//     ( SELECT json_agg(proj.*)
//       FROM (
//         SELECT subP.picture, subP.id, subP.title
//         FROM similar_projects AS sim
//         JOIN projects AS subP
//         ON sim.similar_id = subP.id
//         WHERE sim.project_id = p.id
//       ) proj
//     ) AS "similar"
//     FROM projects AS p
//     JOIN projectlevels AS l
//     ON l.id = p.level
//     JOIN projects_skills AS ps
//     ON ps.project_id = p.id
//     JOIN skills AS s
//     ON s.id = ps.skill_id
//     WHERE p.id = ${id}
//     GROUP BY p.id, l.level
//   `
export const getSingleProject = (req, res, next) => {
  db.query(
    `SELECT p.id, title, p.picture, description, date, source, l.level, json_agg(s.*) AS "skills"
    FROM projects AS p 
    JOIN projectlevels AS l 
    ON l.id = p.level
    JOIN projects_skills AS ps
    ON ps.project_id = p.id
    JOIN skills AS s
    ON s.id = ps.skill_id
    WHERE p.id = $1
    GROUP BY p.id, l.level`,
    [req.params.id]
  )
    .then(({ rows }) => res.json(rows[0]))
    .catch((err) => next(err));
};

// `SELECT obj -> 'vote' AS vote
// FROM json_array_elements((SELECT rate FROM projects WHERE id = $1)) obj
// WHERE obj ->> 'user_id'='${user}'`

export const changeProjectRate = async (req, res, next) => {
  const { id } = req.params;
  const { vote } = req.body;
  // const { user } = req;
  const user = 1;

  const isRated = await db
    .query(
      `SELECT vote, id
      FROM projects_rate
      WHERE project_id = $1 AND user_id = $2`,
      [id, user]
    )
    .then(({ rows }) => rows[0])
    .catch(next);

  // ADD NEW RATE
  if (!isRated) {
    const options = [id, user, vote];
    await db
      .query(`INSERT INTO projects_rate(project_id, user_id, vote) VALUES($1, $2, $3)`, options)
      .catch(next);
  }
  // DELETE EXISTING RATE
  else if (isRated.vote === vote) {
    await db.query(`DELETE FROM projects_rate WHERE id = $1`, [isRated.id]).catch(next);
  }
  // SWITCH TO OPOSITE RATE
  else {
    await db.query(`UPDATE projects_rate SET vote=$1 WHERE id=$2`, [vote, isRated.id]).catch(next);
  }

  getProjectRate(req, res, next);
};

export const getProjectRecommendations = async (req, res, next) => {
  const project = await db
    .query(`SELECT keyword, mainSkill, level FROM projects WHERE id = $1`, [req.params.id])
    .then(({ rows }) => rows[0])
    .catch(next);

  const recommendations = await db
    .query(
      `SELECT id, title, picture
      FROM projects
      WHERE id != $1 AND (keyword = $2 OR level = $3 OR mainSkill = $4)
      LIMIT 10`,
      [req.params.id, project.keyword, project.level, project.mainSkill]
    )
    .then(({ rows }) => rows)
    .catch(next);

  res.json(recommendations);
};

