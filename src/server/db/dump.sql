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
    ('User User', 'user.user@gmail.com', '110822060876468110000', 'https://lh6.googleusercontent.com/-5QhCSbdT4ag/AAAAAAAAAAI/AAAAAAAEQ/VV68fxMyMs4/s96-c/photo.jpg', false),
    ('Maxim Pozhidayev', 'pogidaevmo@gmail.com', '104819189707149372033', 'https://lh6.googleusercontent.com/-TE1h5kRJKK0/AAAAAAAAAAI/AAAAAAAAA6U/mXm7qY1aWgA/s96-c/photo.jpg', true);

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
    ('Simple'),
    ('Medium'),
    ('Best');
-- ======================================================================================




-- PROJECTS
-- ======================================================================================
-- init
CREATE TABLE projects
(
    id SERIAL PRIMARY KEY,
    title CHARACTER varying(64),
    description CHARACTER varying(256),
    picture CHARACTER varying(256),
    author_id INTEGER REFERENCES users(id),
    date date DEFAULT CURRENT_TIMESTAMP,
    level_id INTEGER REFERENCES projectlevels(id),
    github CHARACTER varying(64),
    deploy CHARACTER varying(64)
);

-- insert
INSERT INTO projects
    (title, description, picture, author_id, level_id)
VALUES
    ('one', 'descr one', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtwZ8EnpOYoQKm1t-lDY7oaR6-yqycubmXLObfM5V21nDPSbV', 1, 1),
    ('two', 'descr two', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtwZ8EnpOYoQKm1t-lDY7oaR6-yqycubmXLObfM5V21nDPSbV', 1, 2),
    ('three', 'descr three', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtwZ8EnpOYoQKm1t-lDY7oaR6-yqycubmXLObfM5V21nDPSbV', 1, 3),
    ('four', 'descr four', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtwZ8EnpOYoQKm1t-lDY7oaR6-yqycubmXLObfM5V21nDPSbV', 1, 3),
    ('five', 'descr five', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtwZ8EnpOYoQKm1t-lDY7oaR6-yqycubmXLObfM5V21nDPSbV', 1, 1);

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
    source CHARACTER varying(64),
    range INTEGER,
    category_id INTEGER REFERENCES skills_categories(id)
);


-- insert
INSERT INTO skills
    (skill, category_id, skill_picture, range)
VALUES
    ('angular', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/angular.png?raw=true', 1),
    ('react', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/react.png?raw=true', 1),
    ('redux', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/redux.png?raw=true', 1),
    ('vue', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/vue.png?raw=true', 1),
    ('js', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/js.png?raw=true', 2),
    ('jquery', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/jquery.png?raw=true', 3),
    ('html', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/html.png?raw=true', 3),
    ('sass', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/sass.png?raw=true', 2),
    ('mobile', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/mobile.png?raw=true', 2),
    ('bem', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/bem.png?raw=true', 3),
    ('bootstrap', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/bootstrap.png?raw=true', 3),
    ('ts', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/ts.png?raw=true', 2),
    ('node', 2, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/node.png?raw=true', 1),
    ('postgres', 3, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/postgres.png?raw=true', 1),
    ('mongodb', 3, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/mongoDB.png?raw=true', 1),
    ('sequelize', 3, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/sequelize.png?raw=true', 2),
    ('mocha', 4, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/mocha.png?raw=true', 1),
    ('chai', 4, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/chai.png?raw=true', 2),
    ('jest', 4, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/jest.png?raw=true', 1),
    ('sinon', 4, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/sinon.png?raw=true', 2),
    ('babel', 5, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/babel.png?raw=true', 2),
    ('eslint', 5, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/eslint.png?raw=true', 2),
    ('webpack', 5, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/webpack.png?raw=true', 2),
    ('opengraph', 5, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/openGraph.png?raw=true', 3),
    ('schema', 5, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/schema.png?raw=true', 3);

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
    contact_type CHARACTER varying(64),
    contact_picture CHARACTER varying(128)
);

-- insert
INSERT INTO contacts
    (contact_title, contact_value, contact_type, contact_picture)
VALUES
    ('Phone', '+38-050-77-23-169', 'text', 'https://www.beechwoodhomes.com.au/images/icons/phone-icon.png'),
    ('Email', 'pogidaevmo@gmail.com', 'text', 'https://cdn1.iconfinder.com/data/icons/Momentum_MatteEntireSet/32/gmail.png'),
    ('LinkedIn', 'https://www.linkedin.com/in/maxim-pozhidaev-16726811a/', 'link', 'https://www.gera.in/images/linkedin-icon.png' ),
    ('Facebook', 'https://www.facebook.com/max.pozhidaev.7', 'link', 'https://www.unishowinc.com/wp-content/uploads/2017/05/p-4749-456113619615.gif'),
    ('GitHub', 'https://github.com/Max-im', 'link', 'https://image.flaticon.com/icons/png/128/25/25231.png'),
    ('CodePen', 'https://codepen.io/max-im/', 'link', 'https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/59_Codepen_logo_logos-128.png');

-- ======================================================================================




-- EXPERIENCE
-- ======================================================================================
-- init
CREATE TABLE experience
(
    id SERIAL PRIMARY KEY,
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
    (exp_title, exp_company, exp_from, exp_to, exp_is_current, exp_image, exp_description)
VALUES
    ('Specialist', 'PrivateBank', '06.2006', '03.2007', false, 'https://gravitsapa.info/wp-content/uploads/2017/01/pb.png', 'Conclusion of loan agreements; Attraction of consumers'),
    ('Economist - Head of Labor and Wages Department', 'Regional gas company', '03.2007', '09.2014', false, 'https://max-im.github.io/img/experience/gaz.jpg', 'Control of the work of the department; Development of a part of the budget in terms of FOT and the number of staff; Calculated cost; Conducting competitive bidding procedures; Conducting time and photos of working hours; Check the time sheets; Preparation of periodic reports'),
    ('Engineer on the organization and standardization of work', 'Chernobyl nuclear power plant', '09.2014', '01.2018', false, 'https://max-im.github.io/img/experience/chnpp.jpg', 'Participation in performance appraisal of workplaces; Performance of works on tariffing; Carrying out works aimed at maintaining the level of labor standardization at the enterprise; Check of official and working instructions'),
    ('JS Developer', 'iDeals solutions', '01.208', '', true, 'https://is4-ssl.mzstatic.com/image/thumb/Purple49/v4/4f/87/a3/4f87a3be-b6e9-49e3-d6e9-2f92c7340775/source/256x256bb.jpg', 'Develop and maintain applications, chrome extensions and google add-ons; Use in my work: React, Redux, Vue, MongoDB, PostgreSQL, Nodejs');


-- ======================================================================================





-- SUMMARY RESUME
-- ======================================================================================
-- init
CREATE TABLE summary
(
    id SERIAL PRIMARY KEY,
    photo CHARACTER varying(64),
    name CHARACTER varying(64),
    summary CHARACTER varying(128)
);

-- insert
INSERT INTO summary
    (photo, name, summary)
VALUES
    ('https://max-im.github.io/img/myPhoto.jpg', 'Maxim Pozhidayev', 'I am a javaScript developer');
-- ======================================================================================




-- EDUCATION
-- ======================================================================================
-- init
CREATE TABLE education
(
    id SERIAL PRIMARY KEY,
    edu_photo CHARACTER varying(64),
    edu_title CHARACTER varying(64),
    edu_description CHARACTER varying(64)
);

-- insert
INSERT INTO education
    (edu_photo, edu_title, edu_description)
VALUES
    ('https://max-im.github.io/img/experience/donNu.jpg', 'Graduated DON NU', 'Human resources management and labor economics');
-- ======================================================================================




