// import client from "../db";

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
    },
    {
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
      id: 17,
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
      id: 18,
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
      id: 19,
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
      id: 20,
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
      id: 21,
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

