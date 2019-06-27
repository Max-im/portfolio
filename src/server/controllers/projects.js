import client from "../db";

export const getAllProjects = (req, res, next) => {
  client
    .query(
      `SELECT p.id, title, description, picture, skill_picture
              FROM projects AS p
              JOIN projects_skills AS ps ON ps.project_id = p.id
              JOIN skills ON skills.id = ps.skill_id`
    )
    .then(({ rows }) => {
      req.body.projects = rows;
      next();
    })
    .catch(err => next(err));
};

export const getProjectById = (req, res, next) => {
  client
    .query(
      `SELECT p.id, title, description, picture, skill_picture 
                FROM projects AS p
                JOIN projects_skills AS ps ON ps.project_id = p.id 
                JOIN skills ON skills.id = ps.skill_id 
                WHERE p.id=$1`,
      [req.params.id]
    )
    .then(({ rows }) => {
      req.body.projects = rows;
      next();
    })
    .catch(err => next(err));
};

export const attachSkillsToProject = (req, res, next) => {
  const { projects } = req.body;
  const result = {};
  projects.forEach(item => {
    if (!result[item.id])
      result[item.id] = { ...item, skill_picture: [item.skill_picture] };
    else result[item.id].skill_picture.push(item.skill_picture);
  });
  req.body.formatedProjects = Object.keys(result).map(key => result[key]);
  next();
};

export const returnProjects = (req, res) => {
  const { formatedProjects } = req.body;
  res.json(formatedProjects);
};
