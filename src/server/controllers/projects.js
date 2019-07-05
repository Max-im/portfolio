import client from "../db";

/**
 * @route PROJECTS
 * @description save retrieve all projects data, store them into req.body.projects
 */
export const getAllProjects = (req, res, next) => {
  client
    .query(
      `
    SELECT proj.id, title, description, picture, author_id, date, github, deploy, level, skill_id, skill, skill_picture, range
    FROM projects AS proj
    JOIN projectlevels AS lev ON proj.level_id = lev.id
    JOIN projects_skills AS ps ON proj.id = ps.project_id
    JOIN skills AS s ON s.id = ps.skill_id
  `
    )
    .then(({ rows }) => {
      req.body.projects = rows;
      next();
    })
    .catch(err => next(err));
};

/**
 * @route PROJECTS
 * @description formated all projects data, store them into req.body.result
 */
export const formateAllProjects = (req, res, next) => {
  const { projects } = req.body;
  const projectsObj = {};
  projects.forEach(item => {
    if (!projectsObj[item.id]) {
      projectsObj[item.id] = {
        id: item.id,
        title: item.title,
        description: item.description,
        picture: item.picture,
        author_id: item.author_id,
        date: item.date,
        github: item.github,
        deploy: item.deploy,
        level: item.level,
        skills: []
      };
    }
    projectsObj[item.id].skills.push({
      id: item.skill_id,
      title: item.skill,
      picture: item.skill_picture,
      range: item.range
    });
  });

  const result = Object.keys(projectsObj)
    .map(key => projectsObj[key])
    .map(item => ({
      ...item,
      skills: item.skills.sort((a, b) => a.range - b.range)
    }));

  req.body.result = result;
  next();
};

/**
 * @route PROJECT
 * @description get data of particular project, store them into req.body.projects
 */
export const getProjectById = (req, res, next) => {
  client
    .query(
      `SELECT proj.id, title, description, picture, proj.date, github, deploy, level,
              c.id AS comment_id, c.author_id AS comment_author,  c.date AS comment_date, text, avatar, name,
              skill_id, skill, skill_picture, range,
              sign, l.user_id AS like_user
        FROM projects AS proj
        JOIN projectlevels AS lev ON proj.level_id = lev.id
        JOIN projects_skills AS ps ON proj.id = ps.project_id
        JOIN comments AS c ON proj.id = c.project_id
        JOIN users AS u ON u.id = c.author_id
        JOIN skills AS s ON s.id = ps.skill_id
        JOIN likes AS l ON proj.id = l.project_id
        WHERE proj.id=$1`,
      [req.params.id]
    )
    .then(({ rows }) => {
      req.body.projectData = rows;
      next();
    })
    .catch(err => next(err));
};

/**
 * @route PROJECT
 * @description
 */
export const parseProjectData = (req, res, next) => {
  const { projectData } = req.body;
  const row = projectData[0];
  const result = {
    id: row.id,
    title: row.title,
    description: row.description,
    picture: row.picture,
    date: row.date,
    github: row.github,
    deploy: row.deploy,
    level: row.level,
    skills: {},
    comments: {},
    likes: [],
    dislikes: []
  };

  projectData.forEach(item => {
    // add skills
    if (!result.skills[item.skill_id]) {
      result.skills[item.skill_id] = {
        id: item.skill_id,
        title: item.skill,
        picture: item.skill_picture
      };
    }

    // add comments
    if (!result.comments[item.comment_id]) {
      result.comments[item.comment_id] = {
        id: item.comment_id,
        author: item.comment_author,
        date: item.comment_date,
        text: item.text,
        avatar: item.avatar,
        name: item.name
      };
    }

    // add likes
    if (item.sign) result.likes.push(item.like_user);

    // add dislikes
    if (!item.sign) result.dislikes.push(item.like_user);
  });

  const com = result.comments;
  result.comments = Object.keys(com).map(key => com[key]);
  result.skills = Object.keys(result.skills).map(key => result.skills[key]);
  result.dislikes = result.dislikes.filter((v, i, a) => a.indexOf(v) === i);
  result.likes = result.likes.filter((v, i, a) => a.indexOf(v) === i);

  req.body.result = result;
  next();
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
