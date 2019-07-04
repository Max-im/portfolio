import client from "../db";

/**
 * @route PROJECTS
 * @description save retrieve all projects data, store them into req.body.projects
 */
export const getAllProjects = (req, res, next) => {
  client
    .query(
      `SELECT p.id, title, description, picture, date, github, deploy, l.level 
        FROM projects AS p
        JOIN projectlevels AS l
        ON l.id = p.level_id
        ORDER BY id DESC`
    )
    .then(({ rows }) => {
      req.body.projects = rows;
      next();
    })
    .catch(err => next(err));
};

/**
 * @route PROJECT
 * @description get data of particular project, store them into req.body.projects
 */
export const getProjectById = (req, res, next) => {
  client
    .query(
      `SELECT id, title, description, picture, date, github, deploy  
        FROM projects 
        WHERE id=$1`,
      [req.params.id]
    )
    .then(({ rows }) => {
      req.body.projects = rows;
      next();
    })
    .catch(err => next(err));
};

/**
 * @route PROJECT
 * @description
 */
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

/**
 * @route PROJECT
 * @description
 */
export const attachLikes = (req, res, next) => {
  const { projectsWithSkills: projects } = req.body;

  Promise.all(
    projects.map(item =>
      client.query(
        `SELECT l.sign, u.id AS uid 
            FROM likes AS l 
            JOIN users AS u 
            ON u.id = l.user_id 
            WHERE project_id=$1 
            ORDER BY l.id DESC`,
        [item.id]
      )
    )
  )
    .then(resp => {
      req.body.projectsWithLikes = projects.map((proj, i) => ({
        ...proj,
        likes: resp[i].rows.filter(item => item.sign).map(item => item.uid),
        dislikes: resp[i].rows.filter(item => !item.sign).map(item => item.uid)
      }));
      next();
    })
    .catch(err => next(err));
};

/**
 * @route PROJECT
 * @description
 */
export const attachComments = (req, res, next) => {
  const { projectsWithLikes: projects } = req.body;

  Promise.all(
    projects.map(item =>
      client.query(
        `SELECT c.id, c.text, c.date, u.avatar, u.name 
          FROM comments AS c  
          JOIN users AS u 
          ON u.id = c.author_id 
          WHERE project_id=$1 
          ORDER BY c.id DESC`,
        [item.id]
      )
    )
  )
    .then(resp => {
      req.body.projectsWithComments = projects.map((proj, i) => ({
        ...proj,
        comments: resp[i].rows
      }));
      next();
    })
    .catch(err => next(err));
};

/**
 * @route PROJECT/DELETE
 * @description
 */
export const deleteProjectSkills = (req, res, next) => {
  const { id } = req.params;
  client
    .query(
      `DELETE FROM projects_skills 
        WHERE project_id=$1`,
      [id]
    )
    .then(() => next())
    .catch(err => next(err));
};

/**
 * @route PROJECT/DELETE
 * @description
 */
export const deleteProjectLikes = (req, res, next) => {
  const { id } = req.params;
  client
    .query(
      `DELETE FROM likes 
        WHERE project_id=$1`,
      [id]
    )
    .then(() => next())
    .catch(err => next(err));
};

/**
 * @route PROJECT/DELETE
 * @description
 */
export const deleteProjectComments = (req, res, next) => {
  const { id } = req.params;
  client
    .query(
      `DELETE FROM comments 
        WHERE project_id=$1`,
      [id]
    )
    .then(() => next())
    .catch(err => next(err));
};

/**
 * @route PROJECT/DELETE
 * @description
 */
export const deleteProject = (req, res, next) => {
  const { id } = req.params;
  client
    .query(
      `DELETE FROM projects 
        WHERE id=$1`,
      [id]
    )
    .then(() => next())
    .catch(err => next(err));
};

/**
 * @route PROJECT/CREATE
 * @description
 */
export const createNewProject = (req, res, next) => {
  const { author_id, picture, title, description, github, deploy } = req.body;
  client
    .query(
      `INSERT INTO projects(author_id, picture, title, description, github, deploy) 
        VALUES ($1, $2, $3, $4, $5, $6) 
        RETURNING id`,
      [author_id, picture, title, description, github, deploy]
    )
    .then(({ rows }) => {
      req.body.project_id = rows[0].id;
      next();
    })
    .catch(err => next(err));
};

/**
 * @route PROJECT/CREATE
 * @description
 */
export const attachSkillsToNewProject = async (req, res, next) => {
  const { skills, project_id } = req.body;
  for (const skill_id of skills) {
    await client
      .query(
        `INSERT INTO projects_skills(project_id, skill_id) 
          VALUES ($1, $2)`,
        [project_id, skill_id]
      )
      .catch(err => next(err));
  }
  next();
};
/**
 * @route PROJECT/UPDATE
 * @description
 */
export const updateProjectData = async (req, res, next) => {
  // get current db project data
  const { rows: theProjectArr } = await client.query(
    `SELECT title, description, picture, github, deploy 
      FROM projects WHERE id=$1`,
    [req.body.project_id]
  );

  // retrieve updated fields only
  const toUpdate = {};
  const theProject = theProjectArr[0];
  for (const key in theProject) {
    if (req.body[key] !== theProject[key]) {
      toUpdate[key] = req.body[key];
    }
  }

  // update project fields
  Promise.all(
    Object.keys(toUpdate).map(key => {
      client.query(
        `UPDATE projects
        SET ${key}=($1)
        WHERE id=$2`,
        [toUpdate[key], req.body.project_id]
      );
    })
  ).then(() => next());
};

/**
 * @route PROJECT/UPDATE
 * @description
 */
export const retrieveSkillsToUpdate = (req, res, next) => {
  const { project_id, skills } = req.body;

  client
    .query(
      `SELECT skill_id 
        FROM projects_skills 
        WHERE project_id=$1`,
      [project_id]
    )
    .then(({ rows }) => {
      const currentSkills = rows.map(item => item.skill_id);
      req.body.toRemove = currentSkills.filter(item => !skills.includes(item));
      req.body.toAdd = skills.filter(item => !currentSkills.includes(item));
      next();
    });
};

/**
 * @route PROJECT/UPDATE
 * @description
 */
export const addNewProjectSkills = async (req, res, next) => {
  const { toAdd, project_id } = req.body;
  if (toAdd.length === 0) return next();
  Promise.all(
    toAdd.map(skill_id =>
      client.query(
        `INSERT INTO projects_skills(skill_id, project_id) VALUES($1, $2)`,
        [skill_id, project_id]
      )
    )
  ).then(() => next());
};

/**
 * @route PROJECT/UPDATE
 * @description
 */
export const removeOldProjectSkills = (req, res, next) => {
  const { toRemove, project_id } = req.body;
  if (toRemove.length === 0) return next();
  Promise.all(
    toRemove.map(skill_id =>
      client.query(
        `DELETE FROM projects_skills WHERE skill_id=$1 AND project_id=$2`,
        [skill_id, project_id]
      )
    )
  ).then(() => next());
};
