-- ABOUT
CREATE TABLE about
(
    id SERIAL PRIMARY KEY,
    name CHARACTER varying(64) NOT NULL,
    last_name CHARACTER varying(64) NOT NULL,
    title CHARACTER varying(64) NOT NULL,
    summary CHARACTER varying(1024),
    avatar CHARACTER varying(64),
    social JSON,
    contacts JSON
);

INSERT INTO about
    (name, last_name, title, summary, avatar, social, contacts)
VALUES
    (
        'Maksym', 'Pozhydaiev', 'Web Developer', 
        'I am a deep motivated Web developer, with strong knowledge in Node.js, React, Redux, Vue, MongoDb. I like studying new and awesome technologies and accomplish approaches with them in projects. Reliable and able to achieve established targets in set times. It is important to me to see results of my work and to impact on the result.', 
        'avatar.jpg',
        '[
            {"id": 1, "url": "https://www.facebook.com/max.pozhidaev.7", "name":"Facebook", "classes": "fab fa-facebook-square"},
            {"id": 2, "url": "https://www.linkedin.com/in/max-im", "name":"LinkedIn", "classes": "fab fa-linkedin"},
            {"id": 3, "url": "https://twitter.com/MPozhidayev", "name":"Twitter", "classes": "fab fa-twitter-square"},
            {"id": 4, "url": "https://github.com/max-im", "name":"GitHub", "classes": "fab fa-github-square"},
            {"id": 5, "url": "https://codepen.io/max-im", "name":"CodPen", "classes": "fab fa-codepen"}
        ]', 
        '[
            {"id": 1, "value": "+38-050-77-23-169", "type":"text", "classes": "fas fa-phone"},
            {"id": 2, "value": "pogidaevmo@gmail.com", "type":"link", "classes": "fas fa-envelope"},
            {"id": 3, "value": "pogidaev_mo", "type":"text", "classes": "fab fa-skype"}
        ]'
    );

    
-- SKILLS CATEGORIES
CREATE TABLE skills_categories
(
    id SERIAL PRIMARY KEY,
    range INTEGER UNIQUE,
    name CHARACTER varying(64)
);

INSERT INTO skills_categories
    (name, range)
VALUES
    ('Frontend', 1),
    ('Backend', 2),
    ('Database', 3),
    ('Tests', 4),
    ('Other', 5);


-- SKILLS
CREATE TABLE skills
(
    id SERIAL PRIMARY KEY,
    name CHARACTER varying(64),
    icon CHARACTER varying(128),
    url CHARACTER varying(128),
    range INTEGER,
    category INTEGER REFERENCES skills_categories(id)
);


INSERT INTO skills
    (name, category, icon, range, url)
VALUES
    ('html', 1, 'html.png', 3, 'https://developer.mozilla.org/en-US/docs/Web/HTML'),
    ('css', 1, 'css.png', 2, 'https://developer.mozilla.org/en-US/docs/Web/CSS'),
    ('js', 1, 'js.png', 2, 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'),
    ('sass', 1, 'sass.png', 2, 'https://sass-lang.com/'),
    ('jquery', 1, 'jquery.png', 3, 'https://jquery.com/'),
    ('angular', 1, 'angular.png', 1, 'https://angular.io/'),
    ('react', 1, 'react.png', 1, 'https://reactjs.org/'),
    ('redux', 1, 'redux.png', 1, 'https://redux.js.org/'),
    ('vue', 1, 'vue.png', 1, 'https://vuejs.org/'),
    ('ts', 1, 'ts.png', 2, 'https://www.typescriptlang.org/'),
    ('node', 2, 'node.png', 1, 'https://nodejs.org/en/'),
    ('rest', 3, 'rest.png', 1, 'https://developer.mozilla.org/en-US/docs/Glossary/REST'),
    ('mongodb', 3, 'mongodb.png', 1, 'https://www.mongodb.com/'),
    ('postgres', 3, 'psql.png', 1, 'https://www.postgresql.org/'),
    ('sequelize', 3, 'sequelize.png', 2, 'https://sequelize.org/'),
    ('mocha', 4, 'mocha.png', 1, 'https://mochajs.org/'),
    ('jest', 4, 'jest.png', 1, 'https://jestjs.io/'),
    ('babel', 5, 'babel.png', 2, 'https://babeljs.io/'),
    ('eslint', 5, 'eslint.png', 2, 'https://eslint.org/'),
    ('webpack', 5, 'webpack.png', 2, 'https://webpack.js.org/');



-- EXPERIENCE
CREATE TABLE experience
(
    id SERIAL PRIMARY KEY,
    title CHARACTER varying(64),
    company CHARACTER varying(64),
    from_date DATE,
    to_date DATE,
    is_current BOOLEAN DEFAULT false,
    icon CHARACTER varying(128),
    description CHARACTER varying(1024)
);

INSERT INTO experience
    (title, company, from_date, to_date, is_current, icon, description)
VALUES
    ('Specialist', 'PrivateBank', '2006-03-01', '2007-06-01', false, 'privatbank.png', 'Conclusion of loan agreements; Attraction of consumers'),
    ('Economist - Head of Labor and Wages Department', 'Regional gas company', '2007-06-01', '2014-09-01', false, 'gorgaz.png', 'Control of the work of the department; Development of a part of the budget in terms of FOT and the number of staff; Calculated cost; Conducting competitive bidding procedures; Conducting time and photos of working hours; Check the time sheets; Preparation of periodic reports'),
    ('Engineer on the organization and standardization of work', 'Chernobyl nuclear power plant', '2014-09-15', '2018-01-08', false, 'chnpp.png', 'Participation in performance appraisal of workplaces; Performance of works on tariffing; Carrying out works aimed at maintaining the level of labor standardization at the enterprise; Check of official and working instructions'),
    ('JS Developer', 'iDeals solutions', '2018-01-09', '2019-09-06', false, 'ideals.png', 'Develop and maintain applications, chrome extensions and google add-ons; Use in my work: React, Redux, Vue, MongoDB, PostgreSQL, Nodejs'),
    ('Web Develper', 'Astound Commerce', '2019-09-09', null, true, 'astound.png', 'Develop complicated E-Commerce Solutions on Demandware platphorm');


-- EDUCATION
CREATE TABLE education
(
    id SERIAL PRIMARY KEY,
    icon CHARACTER varying(64),
    title CHARACTER varying(64),
    description CHARACTER varying(64),
    from_date DATE,
    to_date DATE
);

INSERT INTO education
    (icon, title, description, from_date, to_date)
VALUES
    ('donnu.png', 'DON NU', 'Human resources management and labor economics', '2003-09-01', '2008-06-01');

-- PROJECT LEVELS
CREATE TABLE projectlevels
(
    id SERIAL PRIMARY KEY,
    level CHARACTER varying(64)
);

INSERT INTO projectlevels
    (level)
VALUES
    ('best'),
    ('medium'),
    ('simple');


-- PROJECTS
CREATE TABLE projects
(
    id SERIAL PRIMARY KEY,
    title CHARACTER varying(64) NOT NULL,
    description CHARACTER varying(256),
    picture CHARACTER varying(128),
    date date DEFAULT CURRENT_TIMESTAMP,
    level INTEGER REFERENCES projectlevels(id),
    source JSON
);

-- insert
INSERT INTO projects
    (title, description, level, source)
VALUES
    ('Wheel-shop', 'Page displays a wheel shop example', 3, 
        '[
            {"url": "https://github.com/Max-im/tires-shop", "name": "GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/tires-shop/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Senior-citizen', 'Senior sitizen landing page implemented on atomic platform', 3, 
        '[
            {"url": "https://github.com/Max-im/senior-citizen-landing", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/senior-citizen/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Pingbuller', 'Landing page design example', 3, 
        '[
            {"url": "https://github.com/Max-im/pingbuller", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/pingbuller/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Building', 'Company page design example', 3, 
        '[
            {"url": "https://github.com/Max-im/building", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/building/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Holiday-dreams', 'Tourists servise page design example', 2, 
        '[
            {"url": "https://github.com/Max-im/holiday-dreams", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/holiday-dreams/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Maxtogram-vue', 'SPA page similar to instagram implemented on Vue framework', 3, 
        '[
            {"url": "https://github.com/Max-im/maxtagram-vue", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/maxtagram/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Clothes-shop-page', 'Apparel shop SPA page implemented on Vue framework', 2, 
        '[
            {"url": "https://github.com/Max-im/clothes-shop-page", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/clothes-page/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Wheather-service', 'Wheather service SPA page implemented on Vue framework', 3, 
        '[
            {"url": "https://github.com/Max-im/weather", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/wheather/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Resursable', 'SPA Page full of useful links for development implemented on React framework', 3, 
        '[
            {"url": "https://github.com/Max-im/resursable", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/resursable/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Angular-quick-start', 'SPA Page to display profile carts of people implemented on Angular framework', 3, 
        '[
            {"url": "https://github.com/Max-im/angular-quick-start", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/angular-people", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Tutorials-list', 'SPA Page with many courses, games and news for developers implemented on React framework', 3, 
        '[
            {"url": "https://github.com/Max-im/tutorials-list", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/tutorials/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Concerts', 'Concerts Page example SPA page implemented on React framework', 2, 
        '[
            {"url": "https://github.com/Max-im/concerts", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/concerts/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Restorant', 'Resorant page design', 3, 
        '[
            {"url": "https://github.com/Max-im/restoran-page", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/restorant-page/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('React-calendar-calc', 'SPA servise to compute number of days between 2 market dates implemented on React framework', 2, 
        '[
            {"url": "https://github.com/Max-im/react-calendar-calc", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/calendar/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Repo-list', 'SPA servise to display my repo list and to mark/unmark them implemented on React framework', 2, 
        '[
            {"url": "https://github.com/Max-im/repo-list", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/repo-list/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Social-basic', 'Example of basic social network implemented on MERN stack', 2, 
        '[
            {"url": "https://github.com/Max-im/social-basic", "name":"GitHub", "classes": "fab fa-git"}
        ]'),
    ('Furniture-shop', 'Furniture shop page', 1,
        '[
            {"url": "https://github.com/Max-im/furniture", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/furniture/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Furniture-shop:Vue', 'Furniture shop page implemented on Vue framework', 1, 
        '[
            {"url": "https://github.com/Max-im/furniture-shop", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/furniture-Shop-home/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Quotes', 'Landing page design example', 3, 
        '[
            {"url": "https://github.com/Max-im/quotes", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/quotes/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Webcoders', 'Example meeting website page', 2, 
        '[
            {"url": "https://github.com/Max-im/testWebCoder", "name":"GitHub", "classes": "fab fa-git"},
            {"url": "https://max-im.github.io/pages/WebCoders/", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Node-simple-page', 'Example of webpage, implemented on Node.js', 3, 
        '[
            {"url": "https://github.com/Max-im/node-simple-page", "name":"GitHub", "classes": "fab fa-git"}
        ]'),
    ('Game:Arkanoid', 'Implementation arkanoid game', 2, 
        '[
            {"url": "https://codepen.io/max-im/pen/mddaNmZ", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/mddaNmZ", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Pattern:Factory', 'Factory Pattern Implementation', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/abbRYVY", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/abbRYVY", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('CSS:Filters', 'Visualisation of CSS Filters applying', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/abbXNab", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/abbXNab", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Algorithm:quickSort', 'Displaying algorithm of quick sort step by step', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/qBBgzeP", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/qBBgzeP", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Algorithm:benchmark', 'Sample to help estimate performance different loops approches in scopes', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/KKKJOpp", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/KKKJOpp", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Game:BinarySearch', 'Game to help realise binary search approach', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/MWWLNae", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/MWWLNae", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Algorithm:k-neighbours', 'Visualisation of k-neighbours algorithm', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/JjjxgGO", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/JjjxgGO", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('CSS:clock', 'Simple clock on css', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/Rpapyq", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/Rpapyq", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Stopwatch', 'Stopwatch implementation', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/vYYwxoz", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/vYYwxoz", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Menu:Accordion', 'Sample accordion menu implementation', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/WNNBjRr", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/WNNBjRr", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Dropdown:ajax', 'Beautiful dropdown list using ajax request', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/YzzbVVB", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/YzzbVVB", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('MVC:todo', 'Todo list with MVC approach', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/YzzmKYj", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/YzzmKYj", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('CSS:Variables', 'Sample to apply css variables', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/MWWNrYB", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/MWWNrYB", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('FunCanvas', 'Canvas to draw fun pictures', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/vYYopNG", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/vYYopNG", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Effect:Woah', 'Cool effect to for performance', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/jOOgYqx", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/jOOgYqx", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Effect:FollowLink', 'Awesome Menu and link hower effect', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/mddNpLw", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/mddNpLw", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Effect:DragAndDropSlides', 'Slides with drag and drop effect', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/xxxvpaw", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/xxxvpaw", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Effect:ToolTips', 'Sample of tooltips effect', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/wvvVpYX", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/wvvVpYX", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Game:Tennis', 'Game where you can play tennis aganist computer', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/JjjwgWB", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/JjjwgWB", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Effect:GamburgerMenu', 'Gamburger menu example', 3 , 
        '[
            {"url": "https://codepen.io/max-im/pen/WoMZxw", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/WoMZxw", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    ),
    ('Game:WhackAMole', 'Game where you need to catch a grounddog', 3, 
        '[
            {"url": "https://codepen.io/max-im/pen/NWWQXEL", "name":"CodePen", "classes": "fab fa-codepen"},
            {"url": "https://codepen.io/max-im/full/NWWQXEL", "name":"Open", "classes": "fas fa-desktop"}
        ]'
    );

-- COMMENTS
CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(id),
    text CHARACTER varying(1024) NOT NULL,
    date date DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO comments
    (project_id, text)
VALUES
    (1, 'comment 111'),
    (2, 'comment 111'),
    (3, 'comment 111'),
    (4, 'comment 111'),
    (5, 'comment 111'),
    (6, 'comment 111'),
    (7, 'comment 111'),
    (8, 'comment 111'),
    (9, 'comment 111'),
    (10,  'comment 111'),
    (11,  'comment 111'),
    (12,  'comment 111'),
    (13,  'comment 111'),
    (14,  'comment 111'),
    (15,  'comment 111'),
    (16,  'comment 111'),
    (17,  'comment 111'),
    (18,  'comment 111'),
    (19,  'comment 111'),
    (20,  'comment 111'),
    (21,  'comment 111'),
    (22,  'comment 111'),
    (23,  'comment 111'),
    (24,  'comment 111'),
    (25,  'comment 111'),
    (26,  'comment 111'),
    (27,  'comment 111'),
    (28,  'comment 111'),
    (29,  'comment 111'),
    (30,  'comment 111'),
    (31,  'comment 111'),
    (32,  'comment 111'),
    (33,  'comment 111'),
    (34,  'comment 111'),
    (35,  'comment 111'),
    (36,  'comment 111'),
    (37,  'comment 111'),
    (38,  'comment 111'),
    (39,  'comment 111'),
    (40,  'comment 111'),
    (41,  'comment 111'),
    (42,  'comment 111');





-- PROJECTS_SKILLS
CREATE TABLE projects_skills
(
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(id),
    skill_id INTEGER REFERENCES skills(id)
);

INSERT INTO projects_skills
    (project_id, skill_id)
VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 1),
    (2, 2),
    (2, 3),
    (3, 1),
    (3, 2),
    (3, 3),
    (4, 1),
    (4, 2),
    (4, 3),
    (5, 1),
    (5, 2),
    (5, 3),
    (6, 1),
    (6, 2),
    (6, 3),
    (7, 1),
    (7, 2),
    (7, 3),
    (8, 1),
    (8, 2),
    (8, 3),
    (9, 1),
    (9, 2),
    (9, 3),
    (10, 1),
    (10, 2),
    (10, 3),
    (11, 1),
    (11, 2),
    (11, 3),
    (12, 1),
    (12, 2),
    (12, 3),
    (13, 1),
    (13, 2),
    (13, 3),
    (14, 1),
    (14, 2),
    (14, 3),
    (15, 1),
    (15, 2),
    (15, 3),
    (16, 1),
    (16, 2),
    (16, 3),
    (17, 1),
    (17, 2),
    (17, 3),
    (18, 1),
    (18, 2),
    (18, 3),
    (19, 1),
    (19, 2),
    (19, 3),
    (20, 1),
    (20, 2),
    (20, 3),
    (21, 1),
    (21, 2),
    (21, 3),
    (22, 1),
    (22, 2),
    (22, 3),
    (23, 1),
    (23, 2),
    (23, 3),
    (24, 1),
    (24, 2),
    (24, 3),
    (25, 1),
    (25, 2),
    (25, 3),
    (26, 1),
    (26, 2),
    (26, 3),
    (27, 1),
    (27, 2),
    (27, 3),
    (28, 1),
    (28, 2),
    (28, 3),
    (29, 1),
    (29, 2),
    (29, 3),
    (30, 1),
    (30, 2),
    (30, 3),
    (31, 1),
    (31, 2),
    (31, 3),
    (32, 1),
    (32, 2),
    (32, 3),
    (33, 1),
    (33, 2),
    (33, 3),
    (34, 1),
    (34, 2),
    (34, 3),
    (35, 1),
    (35, 2),
    (35, 3),
    (36, 1),
    (36, 2),
    (36, 3),
    (37, 1),
    (37, 2),
    (37, 3),
    (38, 1),
    (38, 2),
    (38, 3),
    (39, 1),
    (39, 2),
    (39, 3),
    (40, 1),
    (40, 2),
    (40, 3),
    (41, 1),
    (41, 2),
    (41, 3),
    (42, 1),
    (42, 2),
    (42, 3);
