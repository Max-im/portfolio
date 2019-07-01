import client from "../db";

export const getAllProjects = (req, res, next) => {
  client
    .query(
      `SELECT id, title, description, picture FROM projects ORDER BY id DESC`
    )
    .then(({ rows }) => {
      req.body.projects = rows;
      next();
    })
    .catch(err => next(err));
};

export const getProjectById = (req, res, next) => {
  client
    .query(`SELECT id, title, description, picture FROM projects WHERE id=$1`, [
      req.params.id
    ])
    .then(({ rows }) => {
      req.body.projects = rows;
      next();
    })
    .catch(err => next(err));
};

export const attachSkills = (req, res, next) => {
  const { projects } = req.body;

  Promise.all(
    projects.map(item =>
      client.query(
        `SELECT skill_id AS id, skill_picture AS picture, s.skill AS title
          FROM projects_skills AS ps 
          JOIN skills AS s ON s.id = ps.skill_id 
          WHERE ps.project_id = $1 `,
        [item.id]
      )
    )
  )
    .then(resp => {
      const result = projects.map((p, i) => ({ ...p, skills: resp[i].rows }));
      req.body.projectsWithSkills = result;
      next();
    })
    .catch(err => next(err));
};

export const attachComments = (req, res, next) => {
  const { projectsWithSkills } = req.body;

  Promise.all(
    projectsWithSkills.map(item =>
      client.query(
        `SELECT c.id, c.text, u.avatar, u.name FROM comments AS c  JOIN users AS u ON u.id = c.author_id WHERE project_id=$1 ORDER BY c.id DESC`,
        [item.id]
      )
    )
  )
    .then(resp => {
      req.body.projectsWithComments = projectsWithSkills.map((proj, i) => ({
        ...proj,
        comments: resp[i].rows
      }));
      next();
    })
    .catch(err => next(err));
};

export const deleteProjectSkills = (req, res, next) => {
  const { id } = req.params;
  client
    .query("DELETE FROM projects_skills WHERE project_id=$1", [id])
    .then(() => next())
    .catch(err => next(err));
};

export const deleteProjectComments = (req, res, next) => {
  const { id } = req.params;
  client
    .query("DELETE FROM comments WHERE project_id=$1", [id])
    .then(() => next())
    .catch(err => next(err));
};

export const deleteProject = (req, res, next) => {
  const { id } = req.params;
  client
    .query("DELETE FROM projects WHERE id=$1", [id])
    .then(() => next())
    .catch(err => next(err));
};

export const createNewProject = (req, res, next) => {
  const { author_id, picture, title, description } = req.body;
  client
    .query(
      "INSERT INTO projects(author_id, picture, title, description) VALUES ($1,$2,$3,$4) RETURNING id",
      [author_id, picture, title, description]
    )
    .then(({ rows }) => {
      req.body.project_id = rows[0].id;
      next();
    })
    .catch(err => next(err));
};

export const attachSkillsToNewProject = async (req, res, next) => {
  const { skills, project_id } = req.body;
  for (const skill_id of skills) {
    await client
      .query(
        "INSERT INTO projects_skills(project_id, skill_id) VALUES ($1, $2)",
        [project_id, skill_id]
      )
      .catch(err => next(err));
  }
  next();
};
