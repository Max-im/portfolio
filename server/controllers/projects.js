import db from "../db";

export const getProjectsNumber = (req, res, next) => {
  let condition = '';
  let preCondition = '';
  let qualityArr = [];
  if (req.query.quality) {
    qualityArr = req.query.quality.split(",");
    preCondition = 'JOIN projectlevels AS l ON l.id = p.level';
    condition = "WHERE "
    qualityArr.forEach((item, i, arr) => {
      condition += `l.level = $${i+1}`;
      if (i + 1 < arr.length) condition += " OR ";
    })
  }
  db.query(`SELECT COUNT(*) FROM projects AS p ${preCondition} ${condition}`, qualityArr)
    .then(({rows}) => res.json(rows[0].count))
    .catch(err => next(err))
};

export const getPageProjects = (req, res, next) => {
  const optArr = [];
  const page = req.params.page || 1;
  const amount = req.query.amount || 12;
  let sort = 'level, title';
  if (req.query.sort) {
    if(req.query.sort === 'title') sort = 'title';
    if(req.query.sort === 'date') sort = 'date, title';
  }
  optArr.push(amount, (page - 1) * amount);
  let condition = '';
  if (req.query.quality) {
    condition = 'WHERE ';
    const qualityArr = req.query.quality.split(",");
    qualityArr.forEach((item, i, arr) => {
      condition += `l.level = $${i+3}`;
      optArr.push(item);
      if (i + 1 < arr.length) condition += " OR ";
    })
  }
  
  
  db.query(`
    SELECT p.id, p.title, p.picture, p.description, p.date, source, l.level, json_agg(s.*) as "skills"
    FROM projects AS p 
    JOIN projectlevels AS l 
    ON l.id = p.level
    JOIN projects_skills AS ps 
    ON ps.project_id = p.id
    JOIN skills AS s
    ON ps.skill_id = s.id
    ${condition}
    GROUP BY p.id, l.level
    ORDER BY ${sort}
    LIMIT $1
    OFFSET $2
  `, optArr)
  .then(({rows}) => res.json(rows))
  .catch(err => next(err))
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
    source: [
      {id: 1, classes: "fab fa-codepen", name: "codepen", url:"https://codepen.io/max-im/pen/KKKJOpp"},
      {id: 2, classes: "fab fa-git", name: "github", url:"https://github.com/max-im"},
      {id: 3, classes: "fab fa-jsfiddle", name: ".netfiddle", url:"https://dotnetfiddle"},
      {id: 4, classes: "fas fa-desktop", name: "open", url:"https://codepen.io/max-im/full/KKKJOpp"}
    ],
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
    comments: [
      { id: 1, date: "2019/01/01", text: "lorem ipsum" },
      { id: 2, date: "2019/01/01", text: "lorem ipsum" },
      { id: 3, date: "2019/01/01", text: "lorem ipsum" },
      { id: 4, date: "2019/01/01", text: "lorem ipsum" },
      { id: 5, date: "2019/01/01", text: "lorem ipsum" }
    ],
    likes: [
      {id: 1, name: "name1"},
      {id: 2, name: "name2"},
      {id: 3, name: "name3"},
      {id: 4, name: "name4"},
      {id: 5, name: "name5"}
    ],
    dislikes: [
      {id: 1, name: "name1"},
      {id: 2, name: "name2"},
      {id: 3, name: "name3"},
    ],
    similar: [
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
          }
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
    ]
  });
};

