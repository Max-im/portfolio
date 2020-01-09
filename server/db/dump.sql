-- AUTH
-- ======================================================================================
-- init
CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    name CHARACTER varying(64),
    email CHARACTER varying(64),
    gId CHARACTER varying(64),
    avatar CHARACTER varying(256),
    isAdmin BOOLEAN DEFAULT false
);

-- insert
INSERT INTO users
    (name, email, gid, avatar, isadmin)
VALUES
    ('Maksym Pozhydaiev', 'pogidaevmo@gmail.com', '104819189707149372033', 'https://lh3.googleusercontent.com/a-/AAuE7mA8JqijgfrAcE2afv9ZrSZiZaB-uoxDSnSS35Wgyg=s96-c', true),
    ('User1', 'user1@gmail.com', '110822060876468110000', 'https://s3.amazonaws.com/uifaces/faces/twitter/eitarafa/128.jpg', false),
    ('User2', 'user1@gmail.com', '110822060876468110001', 'https://s3.amazonaws.com/uifaces/faces/twitter/divya/128.jpg', false);

-- ======================================================================================


-- SOCIAL
-- ======================================================================================
-- init
CREATE TABLE social
(
    id SERIAL PRIMARY KEY,
    path CHARACTER varying(128) NOT NULL,
    tooltip CHARACTER varying(64) NOT NULL,
    classes CHARACTER varying(128) NOT NULL
);

-- insert
INSERT INTO social
    (path, tooltip, classes)
VALUES
    ('https://www.facebook.com/max.pozhidaev.7', 'Facebook', 'fab fa-facebook-square'),
    ('https://www.linkedin.com/in/max-im', 'LinkedIn', 'fab fa-linkedin'),
    ('https://twitter.com/MPozhidayev', 'Twitter', 'fab fa-twitter-square'),
    ('https://github.com/max-im', 'GitHub', 'fab fa-github-square'),
    ('https://codepen.io/max-im', 'CodPen', 'fab fa-codepen');

-- ======================================================================================




-- PROJECT LEVELS
-- ======================================================================================
-- init
CREATE TABLE projectlevels
(
    id SERIAL PRIMARY KEY,
    level CHARACTER varying(64)
);

-- insert
INSERT INTO projectlevels
    (level)
VALUES
    ('best'),
    ('medium'),
    ('simple');
-- ======================================================================================




-- PROJECTS
-- ======================================================================================
-- init
CREATE TABLE projects
(
    id SERIAL PRIMARY KEY,
    title CHARACTER varying(64) NOT NULL,
    description CHARACTER varying(256),
    picture CHARACTER varying(128),
    custom_picture BOOLEAN DEFAULT false,
    date date DEFAULT CURRENT_TIMESTAMP,
    level_id INTEGER REFERENCES projectlevels(id),
    cource CHARACTER varying(64),
    deploy CHARACTER varying(64)
);

-- insert
INSERT INTO projects
    (title, description, level_id, cource, deploy)
VALUES
    ('Wheel-shop', 'Page displays a wheel shop example', 3, 'https://github.com/Max-im/tires-shop', 'https://max-im.github.io/pages/wheels/'),
    ('Senior-citizen', 'Senior sitizen landing page implemented on atomic platform', 3, 'https://github.com/Max-im/senior-citizen-landing', 'https://max-im.github.io/pages/senior-citizen/'),
    ('Pingbuller', 'Landing page design example', 3, 'https://github.com/Max-im/pingbuller', 'https://max-im.github.io/pages/pingbuller/'),
    ('Building', 'Company page design example', 3, 'https://github.com/Max-im/building', 'https://max-im.github.io/pages/building/'),
    ('Holiday-dreams', 'Tourists servise page design example', 2, 'https://github.com/Max-im/holiday-dreams', 'https://max-im.github.io/pages/holiday-dreams/'),
    ('Maxtogram-vue', 'SPA page similar to instagram implemented on Vue framework', 3, 'https://github.com/Max-im/maxtagram-vue', 'https://max-im.github.io/pages/maxtogram/'),
    ('Clothes-shop-page', 'Apparel shop SPA page implemented on Vue framework', 2, 'https://github.com/Max-im/clothes-shop-page', 'https://max-im.github.io/pages/clothes-page/'),
    ('Wheather-service', 'Wheather service SPA page implemented on Vue framework', 3, 'https://github.com/Max-im/weather', 'https://max-im.github.io/pages/wheather/'),
    ('Resursable', 'SPA Page full of useful links for development implemented on React framework', 3, 'https://github.com/Max-im/resursable', 'https://max-im.github.io/pages/resursable/'),
    ('Angular-quick-start', 'SPA Page to display profile carts of people implemented on Angular framework', 3, 'https://github.com/Max-im/angular-quick-start', 'https://max-im.github.io/pages/angular-people/'),
    ('Tutorials-list', 'SPA Page with many courses, games and news for developers implemented on React framework', 3, 'https://github.com/Max-im/tutorials-list', 'https://max-im.github.io/pages/tutorials/'),
    ('Concerts', 'Concerts Page example SPA page implemented on React framework', 2, 'https://github.com/Max-im/concerts', 'https://max-im.github.io/pages/concerts/'),
    ('Restorant', 'Resorant page design', 3, 'https://github.com/Max-im/restoran-page', 'https://max-im.github.io/pages/restorant-page/'),
    ('React-calendar-calc', 'SPA servise to compute number of days between 2 market dates implemented on React framework', 2, 'https://github.com/Max-im/react-calendar-calc', 'https://max-im.github.io/pages/calendar/'),
    ('Repo-list', 'SPA servise to display my repo list and to mark/unmark them implemented on React framework', 2, 'https://github.com/Max-im/repo-list', 'https://max-im.github.io/pages/repo-list/'),
    ('Social-basic', 'Example of basic social network implemented on MERN stack', 2, 'https://github.com/Max-im/social-basic', ''),
    ('Furniture-shop', 'Furniture shop page', 1, 'https://github.com/Max-im/furniture', 'https://max-im.github.io/pages/furniture/'),
    ('Furniture-shop:Vue', 'Furniture shop page implemented on Vue framework', 1, 'https://github.com/Max-im/furniture-shop', 'https://max-im.github.io/pages/furniture-Shop-home/'),
    ('Quotes', 'Landing page design example', 3, 'https://github.com/Max-im/quotes', 'https://max-im.github.io/pages/quotes/'),
    ('Webcoders', 'Example meeting website page', 2, 'https://github.com/Max-im/testWebCoder', 'https://max-im.github.io/pages/WebCoders/'),
    ('Node-simple-page', 'Example of webpage, implemented on Node.js', 3, 'https://github.com/Max-im/node-simple-page', ''),
    ('Game:Arkanoid', 'Implementation arkanoid game', 2, 'https://codepen.io/max-im/pen/mddaNmZ', 'https://codepen.io/max-im/full/mddaNmZ'),
    ('Pattern:Factory', 'Factory Pattern Implementation', 3, 'https://codepen.io/max-im/pen/abbRYVY', 'https://codepen.io/max-im/full/abbRYVY'),
    ('CSS:Filters', 'Visualisation of CSS Filters applying', 3, 'https://codepen.io/max-im/pen/abbXNab', 'https://codepen.io/max-im/full/abbXNab'),
    ('Algorithm:quickSort', 'Displaying algorithm of quick sort step by step', 3, 'https://codepen.io/max-im/pen/qBBgzeP', 'https://codepen.io/max-im/full/qBBgzeP'),
    ('Algorithm:benchmark', 'Sample to help estimate performance different loops approches in scopes', 3, 'https://codepen.io/max-im/pen/KKKJOpp', 'https://codepen.io/max-im/full/KKKJOpp'),
    ('Game:BinarySearch', 'Game to help realise binary search approach', 3, 'https://codepen.io/max-im/pen/MWWLNae', 'https://codepen.io/max-im/full/MWWLNae'),
    ('Algorithm:k-neighbours', 'Visualisation of k-neighbours algorithm', 3, 'https://codepen.io/max-im/pen/JjjxgGO', 'https://codepen.io/max-im/full/JjjxgGO'),
    ('CSS:clock', 'Simple clock on css', 3, 'https://codepen.io/max-im/pen/Rpapyq', 'https://codepen.io/max-im/full/Rpapyq'),
    ('Stopwatch', 'Stopwatch implementation', 3, 'https://codepen.io/max-im/pen/vYYwxoz', 'https://codepen.io/max-im/full/vYYwxoz'),
    ('Menu:Accordion', 'Sample accordion menu implementation', 3, 'https://codepen.io/max-im/pen/WNNBjRr', 'https://codepen.io/max-im/full/WNNBjRr'),
    ('Dropdown:ajax', 'Beautiful dropdown list using ajax request', 3, 'https://codepen.io/max-im/pen/YzzbVVB', 'https://codepen.io/max-im/full/YzzbVVB'),
    ('MVC:todo', 'Todo list with MVC approach', 3, 'https://codepen.io/max-im/pen/YzzmKYj', 'https://codepen.io/max-im/full/YzzmKYj'),
    ('CSS:Variables', 'Sample to apply css variables', 3, 'https://codepen.io/max-im/pen/MWWNrYB', 'https://codepen.io/max-im/full/MWWNrYB'),
    ('FunCanvas', 'Canvas to draw fun pictures', 3, 'https://codepen.io/max-im/pen/vYYopNG', 'https://codepen.io/max-im/full/vYYopNG'),
    ('Effect:Woah', 'Cool effect to for performance', 3, 'https://codepen.io/max-im/pen/jOOgYqx', 'https://codepen.io/max-im/full/jOOgYqx'),
    ('Effect:FollowLink', 'Awesome Menu and link hower effect', 3, 'https://codepen.io/max-im/pen/mddNpLw', 'https://codepen.io/max-im/full/mddNpLw'),
    ('Effect:DragAndDropSlides', 'Slides with drag and drop effect', 3, 'https://codepen.io/max-im/pen/xxxvpaw', 'https://codepen.io/max-im/full/xxxvpaw'),
    ('Effect:ToolTips', 'Sample of tooltips effect', 3, 'https://codepen.io/max-im/pen/wvvVpYX', 'https://codepen.io/max-im/full/wvvVpYX'),
    ('Game:Tennis', 'Game where you can play tennis aganist computer', 3, 'https://codepen.io/max-im/pen/JjjwgWB', 'https://codepen.io/max-im/full/JjjwgWB'),
    ('Effect:GamburgerMenu', 'Gamburger menu example', 3 , 'https://codepen.io/max-im/pen/WoMZxw', 'https://codepen.io/max-im/full/WoMZxw'),
    ('Game:WhackAMole', 'Game where you need to catch a grounddog', 3, 'https://codepen.io/max-im/pen/NWWQXEL', 'https://codepen.io/max-im/full/NWWQXEL');

-- ======================================================================================




-- COMMENTS
-- ======================================================================================
-- init
CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(id),
    author_id INTEGER REFERENCES users(id),
    text CHARACTER varying(1024) NOT NULL,
    date date DEFAULT CURRENT_TIMESTAMP
);

-- insert
INSERT INTO comments
    (project_id, author_id, text)
VALUES
    (1, 2, 'comment 111'),
    (2, 2, 'comment 111'),
    (3, 2, 'comment 111'),
    (4, 2, 'comment 111'),
    (5, 2, 'comment 111'),
    (6, 2, 'comment 111'),
    (7, 2, 'comment 111'),
    (8, 2, 'comment 111'),
    (9, 2, 'comment 111'),
    (10, 2, 'comment 111'),
    (11, 2, 'comment 111'),
    (12, 2, 'comment 111'),
    (13, 2, 'comment 111'),
    (14, 2, 'comment 111'),
    (15, 2, 'comment 111'),
    (16, 2, 'comment 111'),
    (17, 2, 'comment 111'),
    (18, 2, 'comment 111'),
    (19, 2, 'comment 111'),
    (20, 2, 'comment 111'),
    (21, 2, 'comment 111'),
    (22, 2, 'comment 111'),
    (23, 2, 'comment 111'),
    (24, 2, 'comment 111'),
    (25, 2, 'comment 111'),
    (26, 2, 'comment 111'),
    (27, 2, 'comment 111'),
    (28, 2, 'comment 111'),
    (29, 2, 'comment 111'),
    (30, 2, 'comment 111'),
    (31, 2, 'comment 111'),
    (32, 2, 'comment 111'),
    (33, 2, 'comment 111'),
    (34, 2, 'comment 111'),
    (35, 2, 'comment 111'),
    (36, 2, 'comment 111'),
    (37, 2, 'comment 111'),
    (38, 2, 'comment 111'),
    (39, 2, 'comment 111'),
    (40, 2, 'comment 111'),
    (41, 2, 'comment 111'),
    (42, 2, 'comment 111');

-- ======================================================================================



-- LIKES
-- ======================================================================================
-- init
CREATE TABLE likes
(
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(id),
    user_id INTEGER REFERENCES users(id),
    sign BOOLEAN
);

-- insert
INSERT INTO likes
    (project_id, user_id, sign)
VALUES
    (1, 2, true),
    (1, 1, true),
    (2, 1, true),
    (2, 2, false),
    (3, 1, true),
    (4, 1, false),
    (4, 2, false),
    (5, 1, true),
    (5, 2, false);

-- ======================================================================================



-- SKILLS CATEGORIES
-- ======================================================================================
-- init
CREATE TABLE skills_categories
(
    id SERIAL PRIMARY KEY,
    range INTEGER UNIQUE,
    category CHARACTER varying(64)
);

-- insert
INSERT INTO skills_categories
    (category, range)
VALUES
    ('Frontend', 1),
    ('Backend', 2),
    ('Database', 3),
    ('Tests', 4),
    ('Other', 5);
-- ======================================================================================



-- SKILLS
-- ======================================================================================
-- init
CREATE TABLE skills
(
    id SERIAL PRIMARY KEY,
    skill CHARACTER varying(64),
    skill_picture CHARACTER varying(128),
    source CHARACTER varying(128),
    range INTEGER,
    category_id INTEGER REFERENCES skills_categories(id)
);


-- insert
INSERT INTO skills
    (skill, category_id, skill_picture, range, source)
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

-- ======================================================================================


-- PROJECTS_SKILLS
-- ======================================================================================
-- init
CREATE TABLE projects_skills
(
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(id),
    skill_id INTEGER REFERENCES skills(id)
);

-- insert
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

-- ======================================================================================




-- CONTACTS
-- ======================================================================================
-- init
CREATE TABLE contacts
(
    id SERIAL PRIMARY KEY,
    contact_title CHARACTER varying(64),
    contact_value CHARACTER varying(64),
    classname CHARACTER varying(64)
);

-- insert
INSERT INTO contacts
    (contact_title, contact_value, classname)
VALUES
    ('Phone', '+38-050-77-23-169', 'fas fa-phone'),
    ('Email', 'pogidaevmo@gmail.com', 'fas fa-envelope'),
    ('Skype', 'pogidaev_mo', 'fab fa-skype');

-- ======================================================================================



-- EXPERIENCE
-- ======================================================================================
-- init
CREATE TABLE experience
(
    id SERIAL PRIMARY KEY,
    exp_title CHARACTER varying(64),
    exp_company CHARACTER varying(64),
    exp_from DATE,
    exp_to DATE,
    exp_is_current BOOLEAN DEFAULT false,
    exp_image CHARACTER varying(128),
    exp_description CHARACTER varying(1024)
);

-- insert
INSERT INTO experience
    (exp_title, exp_company, exp_from, exp_to, exp_is_current, exp_image, exp_description)
VALUES
    ('Specialist', 'PrivateBank', '2006-03-01', '2007-06-01', false, 'privatbank.png', 'Conclusion of loan agreements; Attraction of consumers'),
    ('Economist - Head of Labor and Wages Department', 'Regional gas company', '2007-06-01', '2014-09-01', false, 'gorgaz.png', 'Control of the work of the department; Development of a part of the budget in terms of FOT and the number of staff; Calculated cost; Conducting competitive bidding procedures; Conducting time and photos of working hours; Check the time sheets; Preparation of periodic reports'),
    ('Engineer on the organization and standardization of work', 'Chernobyl nuclear power plant', '2014-09-15', '2018-01-08', false, 'chnpp.png', 'Participation in performance appraisal of workplaces; Performance of works on tariffing; Carrying out works aimed at maintaining the level of labor standardization at the enterprise; Check of official and working instructions'),
    ('JS Developer', 'iDeals solutions', '2018-01-09', '2019-09-06', false, 'ideals.png', 'Develop and maintain applications, chrome extensions and google add-ons; Use in my work: React, Redux, Vue, MongoDB, PostgreSQL, Nodejs'),
    ('Web Develper', 'Astound Commerce', '2019-09-09', null, true, 'astound.png', 'Develop complicated E-Commerce Solutions on Demandware platphorm');


-- ======================================================================================





-- SUMMARY RESUME
-- ======================================================================================
-- init
CREATE TABLE summary
(
    id SERIAL PRIMARY KEY,
    photo CHARACTER varying(64),
    name CHARACTER varying(64),
    summary CHARACTER varying(1024)
);

-- insert
INSERT INTO summary
    (photo, name, summary)
VALUES
    ('https://max-im.github.io/img/myPhoto.jpg', 'Maksim Pozhydaiev', 'I am a deep motivated Web developer, with strong knowledge in Node.js, React, Redux, Vue, MongoDb. I like studying new and awesome technologies and accomplish approaches with them in projects. Reliable and able to achieve established targets in set termins. It is important to me seeing results of my work and to impact on the result.');
-- ======================================================================================




-- EDUCATION
-- ======================================================================================
-- init
CREATE TABLE education
(
    id SERIAL PRIMARY KEY,
    edu_photo CHARACTER varying(64),
    edu_title CHARACTER varying(64),
    edu_description CHARACTER varying(64),
    start_date DATE,
    finish_date DATE,
    is_in_proccess BOOLEAN DEFAULT false
);

-- insert
INSERT INTO education
    (edu_photo, edu_title, edu_description, start_date, finish_date)
VALUES
    ('donnu.png', 'DON NU', 'Human resources management and labor economics', '2003-09-01', '2008-06-01');
-- ======================================================================================
