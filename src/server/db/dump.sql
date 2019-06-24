-- PROJECTS
-- ======================================================================================
-- init
CREATE TABLE projects
(
    id SERIAL PRIMARY KEY,
    title CHARACTER varying(64),
    description CHARACTER varying(64),
    picture CHARACTER varying(256)
);

-- insert
INSERT INTO projects
    (title, description, picture)
VALUES
    ('one', 'descr one', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtwZ8EnpOYoQKm1t-lDY7oaR6-yqycubmXLObfM5V21nDPSbV'),
    ('two', 'descr two', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtwZ8EnpOYoQKm1t-lDY7oaR6-yqycubmXLObfM5V21nDPSbV'),
    ('three', 'descr three', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtwZ8EnpOYoQKm1t-lDY7oaR6-yqycubmXLObfM5V21nDPSbV'),
    ('four', 'descr four', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtwZ8EnpOYoQKm1t-lDY7oaR6-yqycubmXLObfM5V21nDPSbV'),
    ('five', 'descr five', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtwZ8EnpOYoQKm1t-lDY7oaR6-yqycubmXLObfM5V21nDPSbV');

-- ======================================================================================



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
    ('Maxim Pogidaev', 'maxim.pogidaev@idealscorp.com', '110822060876468114858', 'https://lh6.googleusercontent.com/-5QhCSbdT4ag/AAAAAAAAAAI/AAAAAAAAAEQ/VV68fxMyMs4/s96-c/photo.jpg', true);

-- ======================================================================================




-- SKILLS CATEGORIES
-- ======================================================================================
-- init
CREATE TABLE skills_categories
(
    id SERIAL PRIMARY KEY,
    category CHARACTER varying(64)
);

-- insert
INSERT INTO skills_categories
    (category)
VALUES
    ('Frontend'),
    ('Backend'),
    ('Database'),
    ('Tests'),
    ('Other');


-- ======================================================================================

-- SKILLS
-- ======================================================================================
-- init
CREATE TABLE skills
(
    id SERIAL PRIMARY KEY,
    skill CHARACTER varying(64),
    picture CHARACTER varying(128),
    category_id INTEGER REFERENCES skills_categories(id)
);


-- insert
INSERT INTO skills
    (skill, category_id, picture)
VALUES
    ('angular', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/angular.png?raw=true'),
    ('react', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/react.png?raw=true'),
    ('redux', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/redux.png?raw=true'),
    ('vue', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/vue.png?raw=true'),
    ('js', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/js.png?raw=true'),
    ('jquery', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/jquery.png?raw=true'),
    ('html', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/html.png?raw=true'),
    ('sass', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/sass.png?raw=true'),
    ('mobile', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/mobile.png?raw=true'),
    ('bem', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/bem.png?raw=true'),
    ('bootstrap', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/bootstrap.png?raw=true'),
    ('ts', 1, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/ts.png?raw=true'),
    ('node', 2, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/node.png?raw=true'),
    ('ts', 2, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/ts.png?raw=true'),
    ('postgres', 3, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/postgres.png?raw=true'),
    ('mongodb', 3, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/mongoDB.png?raw=true'),
    ('sequelize', 3, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/sequelize.png?raw=true'),
    ('mocha', 4, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/mocha.png?raw=true'),
    ('chai', 4, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/chai.png?raw=true'),
    ('jest', 4, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/jest.png?raw=true'),
    ('sinon', 4, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/sinon.png?raw=true'),
    ('babel', 5, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/babel.png?raw=true'),
    ('eslint', 5, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/eslint.png?raw=true'),
    ('webpack', 5, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/webpack.png?raw=true'),
    ('opengraph', 5, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/openGraph.png?raw=true'),
    ('schema', 5, 'https://github.com/Max-im/webpack-start-tmpl/raw/master/icons/schema.png?raw=true');

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









