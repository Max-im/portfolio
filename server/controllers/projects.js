import client from "../db";

/**
 * @route PROJECTS
 * @description get number of projects for pagination
 */
export const getProjectsNumber = (req, res) => {
  res.json(10);
};

export const getPageProjects = (req, res) => {
  res.json([
    {
      id: 1,
      title: "Furniture-shop",
      picture: null,
      description: "Furniture shop page",
      level: "Best",
      date: "2020/01/01",
      source: "https://github.com/Max-im/furniture",
      show: "https://max-im.github.io/pages/furniture/",
      skills: [
        {
          id: 1,
          name: "react",
          category: "Frontend",
          icon: "react.png",
          url: "https://reactjs.org/"
        },
        {
          id: 2,
          name: "redux",
          category: "Frontend",
          icon: "redux.png",
          url: "https://redux.js.org/"
        },
        {
          id: 3,
          name: "vue",
          category: "Other",
          icon: "vue.png",
          url: "https://vuejs.org/"
        },
        {
          id: 4,
          name: "ts",
          category: "Backend",
          icon: "ts.png",
          url: "https://www.typescriptlang.org/"
        },
        {
          id: 5,
          name: "node",
          category: "Backend",
          icon: "node.png",
          url: "https://nodejs.org/en/"
        },
        {
          id: 6,
          name: "rest",
          category: "Database",
          icon: "rest.png",
          url: "https://developer.mozilla.org/en-US/docs/Glossary/REST"
        },
        {
          id: 7,
          name: "mongodb",
          category: "Database",
          icon: "mongodb.png",
          url: "https://www.mongodb.com/"
        },
        {
          id: 8,
          name: "postgres",
          category: "Tests",
          icon: "psql.png",
          url: "https://www.postgresql.org/"
        },
        {
          id: 9,
          name: "sequelize",
          category: "Tests",
          icon: "sequelize.png",
          url: "https://sequelize.org/"
        },
        {
          id: 10,
          name: "mocha",
          category: "Other",
          icon: "mocha.png",
          url: "https://mochajs.org/"
        }
      ]
    },
    {
      id: 2,
      title: "Furniture-shop:Vue",
      picture: null,
      description: "Furniture shop page implemented on Vue framework",
      level: "Best",
      date: "2020/01/01",
      source: "https://github.com/Max-im/furniture-shop",
      show: "https://max-im.github.io/pages/furniture-Shop-home/",
      skills: [
        {
          id: 1,
          name: "sequelize",
          category: "Tests",
          icon: "sequelize.png",
          url: "https://sequelize.org/"
        },
        {
          id: 2,
          name: "mocha",
          category: "Other",
          icon: "mocha.png",
          url: "https://mochajs.org/"
        }
      ]
    },
    {
      id: 3,
      title: "Quotes",
      picture: null,
      description: "Landing page design example",
      level: "Best",
      date: "2020/01/01",
      source: "https://github.com/Max-im/quotes",
      show: "https://max-im.github.io/pages/quotes/",
      skills: [
        {
          id: 1,
          name: "react",
          category: "Frontend",
          icon: "react.png",
          url: "https://reactjs.org/"
        },
        {
          id: 2,
          name: "postgres",
          category: "Tests",
          icon: "psql.png",
          url: "https://www.postgresql.org/"
        },
        {
          id: 3,
          name: "sequelize",
          category: "Tests",
          icon: "sequelize.png",
          url: "https://sequelize.org/"
        },
        {
          id: 4,
          name: "mocha",
          category: "Other",
          icon: "mocha.png",
          url: "https://mochajs.org/"
        }
      ]
    },
    {
      id: 4,
      title: "Webcoders",
      picture: null,
      description: "Example meeting website page",
      level: "Best",
      date: "2020/01/01",
      source: "https://github.com/Max-im/testWebCoder",
      show: "https://max-im.github.io/pages/WebCoders/",
      skills: [
        {
          id: 1,
          name: "sequelize",
          category: "Tests",
          icon: "sequelize.png",
          url: "https://sequelize.org/"
        },
        {
          id: 2,
          name: "mocha",
          category: "Other",
          icon: "mocha.png",
          url: "https://mochajs.org/"
        }
      ]
    },
    {
      id: 5,
      title: "Node-simple-page",
      picture: null,
      description: "Example of webpage, implemented on Node.js",
      level: "Medium",
      date: "2020/01/01",
      source: "https://github.com/Max-im/node-simple-page",
      show: null,
      skills: [
        {
          id: 1,
          name: "react",
          category: "Frontend",
          icon: "react.png",
          url: "https://reactjs.org/"
        },
        {
          id: 2,
          name: "redux",
          category: "Frontend",
          icon: "redux.png",
          url: "https://redux.js.org/"
        },
        {
          id: 3,
          name: "vue",
          category: "Other",
          icon: "vue.png",
          url: "https://vuejs.org/"
        },
        {
          id: 4,
          name: "postgres",
          category: "Tests",
          icon: "psql.png",
          url: "https://www.postgresql.org/"
        },
        {
          id: 5,
          name: "sequelize",
          category: "Tests",
          icon: "sequelize.png",
          url: "https://sequelize.org/"
        },
        {
          id: 6,
          name: "mocha",
          category: "Other",
          icon: "mocha.png",
          url: "https://mochajs.org/"
        }
      ]
    },
    {
      id: 6,
      title: "Game:Arkanoid",
      picture: null,
      description: "Implementation arkanoid game",
      level: "Medium",
      date: "2020/01/01",
      source: "https://codepen.io/max-im/pen/mddaNmZ",
      show: "https://codepen.io/max-im/full/mddaNmZ",
      skills: [
        {
          id: 1,
          name: "node",
          category: "Backend",
          icon: "node.png",
          url: "https://nodejs.org/en/"
        },
        {
          id: 2,
          name: "rest",
          category: "Database",
          icon: "rest.png",
          url: "https://developer.mozilla.org/en-US/docs/Glossary/REST"
        },
        {
          id: 3,
          name: "mongodb",
          category: "Database",
          icon: "mongodb.png",
          url: "https://www.mongodb.com/"
        },
        {
          id: 4,
          name: "postgres",
          category: "Tests",
          icon: "psql.png",
          url: "https://www.postgresql.org/"
        },
        {
          id: 5,
          name: "sequelize",
          category: "Tests",
          icon: "sequelize.png",
          url: "https://sequelize.org/"
        },
        {
          id: 6,
          name: "mocha",
          category: "Other",
          icon: "mocha.png",
          url: "https://mochajs.org/"
        }
      ]
    },
    {
      id: 7,
      title: "Pattern:Factory",
      picture: null,
      description: "Factory Pattern Implementation",
      level: "Medium",
      date: "2020/01/01",
      source: "https://codepen.io/max-im/pen/abbRYVY",
      show: "https://codepen.io/max-im/full/abbRYVY",
      skills: [
        {
          id: 1,
          name: "react",
          category: "Frontend",
          icon: "react.png",
          url: "https://reactjs.org/"
        },
        {
          id: 2,
          name: "redux",
          category: "Frontend",
          icon: "redux.png",
          url: "https://redux.js.org/"
        },
        {
          id: 3,
          name: "vue",
          category: "Other",
          icon: "vue.png",
          url: "https://vuejs.org/"
        },
        {
          id: 4,
          name: "ts",
          category: "Backend",
          icon: "ts.png",
          url: "https://www.typescriptlang.org/"
        },
        {
          id: 5,
          name: "mocha",
          category: "Other",
          icon: "mocha.png",
          url: "https://mochajs.org/"
        }
      ]
    },
    {
      id: 8,
      title: "CSS:Filters",
      picture: null,
      description: "Visualisation of CSS Filters applying",
      level: "Simple",
      date: "2020/01/01",
      source: "https://codepen.io/max-im/pen/abbXNab",
      show: "https://codepen.io/max-im/full/abbXNab",
      skills: [
        {
          id: 1,
          name: "ts",
          category: "Backend",
          icon: "ts.png",
          url: "https://www.typescriptlang.org/"
        },
        {
          id: 2,
          name: "node",
          category: "Backend",
          icon: "node.png",
          url: "https://nodejs.org/en/"
        },
        {
          id: 3,
          name: "rest",
          category: "Database",
          icon: "rest.png",
          url: "https://developer.mozilla.org/en-US/docs/Glossary/REST"
        },
      ]
    },
    {
      id: 9,
      title: "Algorithm:quickSort",
      picture: null,
      description: "Displaying algorithm of quick sort step by step",
      level: "Simple",
      date: "2020/01/01",
      source: "https://codepen.io/max-im/pen/qBBgzeP",
      show: "https://codepen.io/max-im/full/qBBgzeP",
      skills: [
        {
          id: 1,
          name: "react",
          category: "Frontend",
          icon: "react.png",
          url: "https://reactjs.org/"
        },
        {
          id: 2,
          name: "redux",
          category: "Frontend",
          icon: "redux.png",
          url: "https://redux.js.org/"
        },
        {
          id: 3,
          name: "vue",
          category: "Other",
          icon: "vue.png",
          url: "https://vuejs.org/"
        }
      ]
    },
    {
      id: 10,
      title: "Algorithm:benchmark",
      picture: null,
      description:
        "Sample to help estimate performance different loops approches in scopes",
      level: "Simple",
      date: "2020/01/01",
      source: "https://codepen.io/max-im/pen/KKKJOpp",
      show: "https://codepen.io/max-im/full/KKKJOpp",
      skills: [
        {
          id: 1,
          name: "react",
          category: "Frontend",
          icon: "react.png",
          url: "https://reactjs.org/"
        },
        {
          id: 2,
          name: "node",
          category: "Backend",
          icon: "node.png",
          url: "https://nodejs.org/en/"
        },
        {
          id: 3,
          name: "rest",
          category: "Database",
          icon: "rest.png",
          url: "https://developer.mozilla.org/en-US/docs/Glossary/REST"
        },
        {
          id: 4,
          name: "mongodb",
          category: "Database",
          icon: "mongodb.png",
          url: "https://www.mongodb.com/"
        }
      ]
    }
  ]);
};

export const getSingleProject = (req, res) => {
  res.json({
    id: 10,
    title: "Algorithm:benchmark",
    picture: null,
    description:
      "Sample to help estimate performance different loops approches in scopes",
    level: "Simple",
    date: "2020/01/01",
    source: "https://codepen.io/max-im/pen/KKKJOpp",
    show: "https://codepen.io/max-im/full/KKKJOpp",
    skills: [
      {
        id: 1,
        name: "react",
        category: "Frontend",
        icon: "react.png",
        url: "https://reactjs.org/"
      },
      {
        id: 2,
        name: "node",
        category: "Backend",
        icon: "node.png",
        url: "https://nodejs.org/en/"
      },
      {
        id: 3,
        name: "rest",
        category: "Database",
        icon: "rest.png",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/REST"
      },
      {
        id: 4,
        name: "mongodb",
        category: "Database",
        icon: "mongodb.png",
        url: "https://www.mongodb.com/"
      }
    ],
    comments:[]
  })
}

export const retrieveQuery = (req, res, next) => {
  const { quality, sort } = req.query;

  return client
    .query("SELECT * FROM projectlevels")
    .then(({ rows }) => {
      if (!quality) req.body.quality = rows.map(item => item.id);
      else {
        const qualityArr = quality.split(",");
        req.body.quality = rows
          .filter(item => qualityArr.includes(item.level.toLowerCase()))
          .map(item => item.id);
      }
      req.body.sort = sort ? sort : "level_id";
      return next();
    })
    .catch(err => res.status(400).json(err));
};

export const getProjectLikes = (req, res) => {
  const { project_id } = req.params;
  return client
    .query(`SELECT * FROM likes WHERE project_id=$1`, [project_id])
    .then(({ rows }) => {
      const likes = rows.filter(v => v.sign).map(v => v.user_id);
      const dislikes = rows.filter(v => !v.sign).map(v => v.user_id);
      return res.json({ likes, dislikes });
    })
    .catch(err => res.status(400).json(err));
};

export const getComments = (req, res) => {
  const { step, project_id } = req.params;
  const skip = (step - 1) * 10;

  return client
    .query(
      ` SELECT c.id AS id, date, avatar, author_id, text, project_id 
        FROM comments AS c 
        JOIN users AS u 
        ON u.id = c.author_id
        WHERE project_id=$1
        ORDER BY c.id DESC 
        OFFSET $2 LIMIT 10
        `,
      [project_id, skip]
    )
    .then(({ rows }) => res.json(rows))
    .catch(err => res.status(400).json(err));
};

/**
 * @route PROJECTS
 * @description save retrieve all projects data, store them into req.body.projects
 */
export const getAllProjects = (req, res, next) => {
  const { ids } = req.body;

  client
    .query(
      `SELECT proj.id, title, custom_picture, picture, date, level, skill_id, skill, skill_picture, range 
      FROM projects AS proj
      JOIN projectlevels AS lev ON proj.level_id = lev.id
      JOIN projects_skills AS ps ON proj.id = ps.project_id
      JOIN skills AS s ON s.id = ps.skill_id
      WHERE proj.id IN (${ids.map(v => v.id - 0)})`
    )
    .then(({ rows }) => {
      req.body.projects = rows;
      return next();
    })
    .catch(err => res.status(400).json(err));
};

/**
 * @route PROJECTS
 * @description formated all projects data, store them into req.body.result
 */
export const formateAllProjects = (req, res) => {
  const { projects, ids } = req.body;

  const result = ids.map(item => {
    const itemProjects = projects.filter(p => p.id === item.id);

    const skills = itemProjects
      .map(p => ({
        id: p.skill_id,
        title: p.skill,
        picture: p.skill_picture,
        range: p.range
      }))
      .sort((a, b) => a.range - b.range);

    return { ...itemProjects[0], skills };
  });

  res.json(result);
};

/**
 * @route PROJECT
 * @description get data of particular project, store them into req.body.projects
 */
export const getProjectById = (req, res, next) => {
  client
    .query(
      `SELECT proj.id, title, description, picture, proj.date, s.range, source, deploy, level,
              skill_id, skill, skill_picture
        FROM projects AS proj
        JOIN projectlevels AS lev ON proj.level_id = lev.id
        JOIN projects_skills AS ps ON proj.id = ps.project_id
        JOIN skills AS s ON s.id = ps.skill_id
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
export const parseProjectData = (req, res) => {
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
    skills: {}
  };

  projectData.forEach(item => {
    // add skills
    if (!result.skills[item.skill_id]) {
      result.skills[item.skill_id] = {
        id: item.skill_id,
        title: item.skill,
        picture: item.skill_picture,
        range: item.range
      };
    }
  });

  result.skills = Object.keys(result.skills)
    .sort((a, b) => (a.range > b.range ? -1 : 1))
    .map(key => result.skills[key]);

  res.json(result);
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
  client
    .query(
      `INSERT INTO projects(author_id, picture, title, description, github, deploy, level_id) 
        VALUES ($1, $2, $3, $4, $5, $6,$7) 
        RETURNING id`,
      [
        req.body.author_id,
        req.body.filename,
        req.body.title,
        req.body.description,
        req.body.github,
        req.body.deploy,
        req.body.level_id
      ]
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

  Promise.all(
    skills.split(",").map(skill_id => {
      return client.query(
        `INSERT INTO projects_skills(project_id, skill_id) 
          VALUES ($1, $2)`,
        [project_id, skill_id]
      );
    })
  )
    .then(() => next())
    .catch(err => next(err));
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
  Object.keys(theProject).map(key => {
    if (req.body[key] !== theProject[key]) {
      toUpdate[key] = req.body[key];
    }
    return null;
  });

  // update project fields
  Promise.all(
    Object.keys(toUpdate).map(key => {
      return client.query(
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
export const retrieveSkillsToUpdate = (req, res) => {
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
      res.end();
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
  return null;
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
  return null;
};
