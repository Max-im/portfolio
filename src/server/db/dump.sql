-- PROJECTS
CREATE TABLE projects
(
    id SERIAL PRIMARY KEY,
    title CHARACTER varying(64),
    description CHARACTER varying(64),
    picture CHARACTER varying(256)
);

-- AUTH
CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    name CHARACTER varying(64),
    email CHARACTER varying(64),
    gId CHARACTER varying(64),
    avatar CHARACTER varying(256),
    isAdmin BOOLEAN DEFAULT false
);

-- SKILLS CATEGORIES
CREATE TABLE skills_categories
(
    id SERIAL PRIMARY KEY,
    category CHARACTER varying(64)
);


-- SKILLS
CREATE TABLE skills
(
    id SERIAL PRIMARY KEY,
    skill CHARACTER varying(64),
    picture CHARACTER varying(128),
    category_id INTEGER REFERENCES skills_categories(id)
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



-- 
INSERT INTO users
    (name, email, gid, avatar, isadmin)
VALUES
    ('Maxim Pogidaev', 'maxim.pogidaev@idealscorp.com', '110822060876468114858', 'https://lh6.googleusercontent.com/-5QhCSbdT4ag/AAAAAAAAAAI/AAAAAAAAAEQ/VV68fxMyMs4/s96-c/photo.jpg', true);


-- 
INSERT INTO skills_categories
    (category)
VALUES
    ('Frontend'),
    ('Backend'),
    ('Database'),
    ('Tests'),
    ('Other');

-- 
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
