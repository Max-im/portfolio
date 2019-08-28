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
    ('Maxim Pogidaev', 'maxim.pogidaev@idealscorp.com', '110822060876468114858', 'https://lh6.googleusercontent.com/-5QhCSbdT4ag/AAAAAAAAAAI/AAAAAAAAAEQ/VV68fxMyMs4/s96-c/photo.jpg', true),
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
    title CHARACTER varying(64),
    description CHARACTER varying(256),
    picture CHARACTER varying(128),
    custom_picture BOOLEAN DEFAULT false,
    author_id INTEGER REFERENCES users(id),
    date date DEFAULT CURRENT_TIMESTAMP,
    level_id INTEGER REFERENCES projectlevels(id),
    github CHARACTER varying(64),
    deploy CHARACTER varying(64)
);

-- insert
INSERT INTO projects
    (title, description, author_id, level_id)
VALUES
    ('one', 'descr one', 1, 1),
    ('two', 'descr two', 1, 2),
    ('three', 'descr three', 1, 3),
    ('four', 'descr four', 1, 3),
    ('five', 'descr five', 1, 1);

-- ======================================================================================




-- COMMENTS
-- ======================================================================================
-- init
CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(id),
    author_id INTEGER REFERENCES users(id),
    text CHARACTER varying(1024),
    date date DEFAULT CURRENT_TIMESTAMP
);

-- insert
INSERT INTO comments
    (project_id, author_id, text)
VALUES
    (1, 2, 'User first comment - project #1'),
    (2, 2, 'User first comment - project #2'),
    (3, 2, 'User first comment - project #3'),
    (4, 2, 'User first comment - project #4'),
    (5, 2, 'User first comment - project #5'),
    (1, 1, 'Admin first comment - project #1'),
    (2, 1, 'Admin first comment - project #2'),
    (3, 1, 'Admin first comment - project #3'),
    (4, 1, 'Admin first comment - project #4'),
    (5, 1, 'Admin first comment - project #5');

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
    ('angular', 1, 'angular.png', 1, 'https://angular.io/'),
    ('react', 1, 'react.png', 1, 'https://reactjs.org/'),
    ('redux', 1, 'redux.png', 1, 'https://redux.js.org/'),
    ('vue', 1, 'vue.png', 1, 'https://vuejs.org/'),
    ('js', 1, 'js.png', 2, 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'),
    ('jquery', 1, 'jquery.png', 3, 'https://jquery.com/'),
    ('html', 1, 'html.png', 3, 'https://developer.mozilla.org/en-US/docs/Web/HTML'),
    ('css', 1, 'css.png', 2, 'https://developer.mozilla.org/en-US/docs/Web/CSS'),
    ('sass', 1, 'sass.png', 2, 'https://sass-lang.com/'),
    ('mobile', 1, 'mobile.png', 2, 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first'),
    ('canvas', 1, 'canvas.png', 2, 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API'),
    ('bem', 1, 'bem.png', 3, 'https://en.bem.info/methodology/'),
    ('bootstrap', 1, 'bootstrap.png', 3, 'https://getbootstrap.com/'),
    ('ts', 1, 'ts.png', 2, 'https://www.typescriptlang.org/'),
    ('node', 2, 'node.png', 1, 'https://nodejs.org/en/'),
    ('postgres', 3, 'postgres.png', 1, 'https://www.postgresql.org/'),
    ('graphql', 3, 'graphql.png', 1, 'https://graphql.org/'),
    ('rest', 3, 'rest.png', 1, 'https://developer.mozilla.org/en-US/docs/Glossary/REST'),
    ('mongodb', 3, 'mongoDB.png', 1, 'https://www.mongodb.com/'),
    ('sequelize', 3, 'sequelize.png', 2, 'https://sequelize.org/'),
    ('mocha', 4, 'mocha.png', 1, 'https://mochajs.org/'),
    ('jest', 4, 'jest.png', 1, 'https://jestjs.io/'),
    ('babel', 5, 'babel.png', 2, 'https://babeljs.io/'),
    ('eslint', 5, 'eslint.png', 2, 'https://eslint.org/'),
    ('webpack', 5, 'webpack.png', 2, 'https://webpack.js.org/'),
    ('opengraph', 5, 'openGraph.png', 3, 'https://ogp.me/'),
    ('schema', 5, 'schema.png', 3, 'https://schema.org/');

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
    (1, 2),
    (1, 3),
    (1, 7),
    (1, 8),
    (1, 9),
    (2, 1),
    (2, 7),
    (2, 8),
    (2, 9),
    (3, 4),
    (3, 10),
    (3, 11),
    (4, 5),
    (4, 15),
    (5, 2),
    (5, 3),
    (5, 12);
-- ======================================================================================




-- CONTACTS
-- ======================================================================================
-- init
CREATE TABLE contacts
(
    id SERIAL PRIMARY KEY,
    contact_title CHARACTER varying(64),
    contact_value CHARACTER varying(64),
    contact_picture CHARACTER varying(64)
);

-- insert
INSERT INTO contacts
    (contact_title, contact_value, contact_picture)
VALUES
    ('Phone', '+38-050-77-23-169', 'phone.png'),
    ('Email', 'pogidaevmo@gmail.com', 'mail.png'),
    ('Skype', 'pogidaev_mo', 'skype.png'),
    ('LinkedIn', 'https://www.linkedin.com/in/maxim-pozhidaev-16726811a/', 'ln.png' ),
    ('Facebook', 'https://www.facebook.com/max.pozhidaev.7', 'fb.png'),
    ('GitHub', 'https://github.com/Max-im', 'git.png'),
    ('CodePen', 'https://codepen.io/max-im/', 'codepen.png');

-- ======================================================================================




-- EXPERIENCE
-- ======================================================================================
-- init
CREATE TABLE experience
(
    id SERIAL PRIMARY KEY,
    range INTEGER UNIQUE,
    exp_title CHARACTER varying(64),
    exp_company CHARACTER varying(64),
    exp_from CHARACTER varying(64),
    exp_to CHARACTER varying(64),
    exp_is_current BOOLEAN DEFAULT false,
    exp_image CHARACTER varying(128),
    exp_description CHARACTER varying(1024)
);

-- insert
INSERT INTO experience
    (range, exp_title, exp_company, exp_from, exp_to, exp_is_current, exp_image, exp_description)
VALUES
    (1, 'Specialist', 'PrivateBank', 'Jun 2006', 'Mar 2007', false, 'privatbank.png', 'Conclusion of loan agreements; Attraction of consumers'),
    (2, 'Economist - Head of Labor and Wages Department', 'Regional gas company', 'Mar 2007', 'Sep 2014', false, 'gaz.jpg', 'Control of the work of the department; Development of a part of the budget in terms of FOT and the number of staff; Calculated cost; Conducting competitive bidding procedures; Conducting time and photos of working hours; Check the time sheets; Preparation of periodic reports'),
    (3, 'Engineer on the organization and standardization of work', 'Chernobyl nuclear power plant', 'Sep 2014', 'Jan 2018', false, 'chnpp.jpg', 'Participation in performance appraisal of workplaces; Performance of works on tariffing; Carrying out works aimed at maintaining the level of labor standardization at the enterprise; Check of official and working instructions'),
    (4, 'JS Developer', 'iDeals solutions', 'Jan 2018', '', true, 'ideals.jpg', 'Develop and maintain applications, chrome extensions and google add-ons; Use in my work: React, Redux, Vue, MongoDB, PostgreSQL, Nodejs');


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
    ('https://max-im.github.io/img/myPhoto.jpg', 'Maksim Pozhydaiev', 'I am a deep motivated JavaScript developer, with strong knowledge in Node.js, React, Redux, Vue, MongoDb. I like studying new and awesome technologies and accomplish approaches with them in projects. Reliable and able to achieve established targets in set times. It is important to me to see results of my work and to impact on the result.');
-- ======================================================================================




-- EDUCATION
-- ======================================================================================
-- init
CREATE TABLE education
(
    id SERIAL PRIMARY KEY,
    range INTEGER UNIQUE,
    edu_photo CHARACTER varying(64),
    edu_title CHARACTER varying(64),
    edu_description CHARACTER varying(64)
);

-- insert
INSERT INTO education
    (range, edu_photo, edu_title, edu_description)
VALUES
    (1, 'donnu.jpg', 'Graduated DON NU', 'Human resources management and labor economics');
-- ======================================================================================




