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
    `
    SELECT p.id, p.title, p.picture, p.description, p.date, l.level, json_agg(s.*) as "skills"
    FROM projects AS p 
    JOIN projectlevels AS l 
    ON l.id = p.level
    JOIN projects_skills AS ps 
    ON ps.project_id = p.id
    JOIN skills AS s
    ON ps.skill_id = s.id
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

export const getSingleProject = (req, res, next) => {
  const { id } = req.params;
  db.query(
    `
    SELECT p.id, title, p.picture, description, date, source, comments, rate, l.level, json_agg(s.*) AS "skills",
    ( SELECT json_agg(proj.*)
      FROM (
        SELECT subP.picture, subP.id, subP.title 
        FROM similar_projects AS sim 
        JOIN projects AS subP 
        ON sim.similar_id = subP.id 
        WHERE sim.project_id = p.id
      ) proj 
    ) AS "similar"
    FROM projects AS p 
    JOIN projectlevels AS l 
    ON l.id = p.level
    JOIN projects_skills AS ps
    ON ps.project_id = p.id
    JOIN skills AS s
    ON s.id = ps.skill_id
    WHERE p.id = ${id}
    GROUP BY p.id, l.level
  `
  )
    .then(({ rows }) => res.json(rows[0]))
    .catch((err) => next(err));
};
