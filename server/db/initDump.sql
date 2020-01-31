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
    source JSON NOT NULL,
    comments JSON NOT NULL,
    rate JSON NOT NULL
);

-- insert
INSERT INTO projects
    (title, description, level, source, comments, rate)
VALUES
    ('Wheel-shop', 'Page displays a wheel shop example', 3, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/tires-shop", "name": "GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/tires-shop/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Senior-citizen', 'Senior sitizen landing page implemented on atomic platform', 3, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/senior-citizen-landing", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/senior-citizen/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": false}]'
    ),
    ('Pingbuller', 'Landing page design example', 3, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/pingbuller", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/pingbuller/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Building', 'Company page design example', 3, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/building", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/building/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Holiday-dreams', 'Tourists servise page design example', 2, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/holiday-dreams", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/holiday-dreams/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Maxtogram-vue', 'SPA page similar to instagram implemented on Vue framework', 3, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/maxtagram-vue", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/maxtagram/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Clothes-shop-page', 'Apparel shop SPA page implemented on Vue framework', 2, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/clothes-shop-page", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/clothes-page/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Wheather-service', 'Wheather service SPA page implemented on Vue framework', 3, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/weather", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/wheather/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Resursable', 'SPA Page full of useful links for development implemented on React framework', 3, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/resursable", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/resursable/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Angular-quick-start', 'SPA Page to display profile carts of people implemented on Angular framework', 3, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/angular-quick-start", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/angular-people", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Tutorials-list', 'SPA Page with many courses, games and news for developers implemented on React framework', 3, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/tutorials-list", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/tutorials/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Concerts', 'Concerts Page example SPA page implemented on React framework', 2, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/concerts", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/concerts/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Restorant', 'Resorant page design', 3, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/restoran-page", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/restorant-page/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('React-calendar-calc', 'SPA servise to compute number of days between 2 market dates implemented on React framework', 2, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/react-calendar-calc", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/calendar/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Repo-list', 'SPA servise to display my repo list and to mark/unmark them implemented on React framework', 2, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/repo-list", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/repo-list/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Social-basic', 'Example of basic social network implemented on MERN stack', 2, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/social-basic", "name":"GitHub", "classes": "fab fa-git"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'),
    ('Furniture-shop', 'Furniture shop page', 1,
        '[
            {"id": 1, "url": "https://github.com/Max-im/furniture", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/furniture/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Furniture-shop:Vue', 'Furniture shop page implemented on Vue framework', 1, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/furniture-shop", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/furniture-Shop-home/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Quotes', 'Landing page design example', 3, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/quotes", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/quotes/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Webcoders', 'Example meeting website page', 2, 
        '[
            {"id": 1, "url": "https://github.com/Max-im/testWebCoder", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/WebCoders/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Node-simple-page', 'Example of webpage, implemented on Node.js', 3, 
        '[
            {"id": 1"url": "https://github.com/Max-im/node-simple-page", "name":"GitHub", "classes": "fab fa-git"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Game:Arkanoid', 'Implementation arkanoid game', 2, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/mddaNmZ", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/mddaNmZ", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Pattern:Factory', 'Factory Pattern Implementation', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/abbRYVY", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/abbRYVY", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('CSS:Filters', 'Visualisation of CSS Filters applying', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/abbXNab", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/abbXNab", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Algorithm:quickSort', 'Displaying algorithm of quick sort step by step', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/qBBgzeP", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/qBBgzeP", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Algorithm:benchmark', 'Sample to help estimate performance different loops approches in scopes', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/KKKJOpp", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/KKKJOpp", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Game:BinarySearch', 'Game to help realise binary search approach', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/MWWLNae", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/MWWLNae", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Algorithm:k-neighbours', 'Visualisation of k-neighbours algorithm', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/JjjxgGO", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/JjjxgGO", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('CSS:clock', 'Simple clock on css', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/Rpapyq", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/Rpapyq", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Stopwatch', 'Stopwatch implementation', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/vYYwxoz", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/vYYwxoz", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Menu:Accordion', 'Sample accordion menu implementation', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/WNNBjRr", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/WNNBjRr", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Dropdown:ajax', 'Beautiful dropdown list using ajax request', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/YzzbVVB", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/YzzbVVB", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('MVC:todo', 'Todo list with MVC approach', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/YzzmKYj", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/YzzmKYj", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('CSS:Variables', 'Sample to apply css variables', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/MWWNrYB", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/MWWNrYB", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('FunCanvas', 'Canvas to draw fun pictures', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/vYYopNG", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/vYYopNG", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Effect:Woah', 'Cool effect to for performance', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/jOOgYqx", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/jOOgYqx", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Effect:FollowLink', 'Awesome Menu and link hower effect', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/mddNpLw", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/mddNpLw", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Effect:DragAndDropSlides', 'Slides with drag and drop effect', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/xxxvpaw", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/xxxvpaw", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Effect:ToolTips', 'Sample of tooltips effect', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/wvvVpYX", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/wvvVpYX", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Game:Tennis', 'Game where you can play tennis aganist computer', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/JjjwgWB", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/JjjwgWB", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Effect:GamburgerMenu', 'Gamburger menu example', 3 , 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/WoMZxw", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/WoMZxw", "name":"Open", "classes": "fas fa-desktop"}
        ]',
       '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    ),
    ('Game:WhackAMole', 'Game where you need to catch a grounddog', 3, 
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/NWWQXEL", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/NWWQXEL", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        '[{"id": 1, "user_id": 1, "vote": true}]'
    );


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


-- SIMILAR
CREATE TABLE similar_projects
(
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(id),
    similar_id INTEGER REFERENCES projects(id)
);

INSERT INTO similar_projects
    (project_id, similar_id)
VALUES
    (1, 33),
    (1, 11),
    (1, 22),
    (2, 7),
    (2, 5),
    (2, 3),
    (3, 32),
    (3, 31),
    (3, 30),
    (4, 20),
    (4, 12),
    (4, 22),
    (5, 11),
    (5, 12),
    (5, 13),
    (6, 11),
    (6, 12),
    (6, 13),
    (7, 11),
    (7, 12),
    (7, 13),
    (8, 11),
    (8, 12),
    (8, 13),
    (9, 11),
    (9, 12),
    (9, 13),
    (10, 11),
    (10, 12),
    (10, 13),
    (11, 7),
    (11, 8),
    (11, 9),
    (12, 7),
    (12, 8),
    (12, 9),
    (13, 7),
    (13, 8),
    (13, 9),
    (14, 11),
    (14, 12),
    (14, 13),
    (15, 11),
    (15, 12),
    (15, 13),
    (16, 11),
    (16, 12),
    (16, 13),
    (17, 11),
    (17, 12),
    (17, 13),
    (18, 11),
    (18, 12),
    (18, 13),
    (19, 11),
    (19, 12),
    (19, 13),
    (20, 11),
    (20, 12),
    (20, 13),
    (21, 11),
    (21, 12),
    (21, 13),
    (22, 11),
    (22, 12),
    (22, 13),
    (23, 11),
    (23, 12),
    (23, 13),
    (24, 11),
    (24, 12),
    (24, 13),
    (25, 11),
    (25, 12),
    (25, 13),
    (26, 11),
    (26, 12),
    (26, 13),
    (27, 11),
    (27, 12),
    (27, 13),
    (28, 11),
    (28, 12),
    (28, 13),
    (29, 11),
    (29, 12),
    (29, 13),
    (30, 11),
    (30, 12),
    (30, 13),
    (31, 11),
    (31, 12),
    (31, 13),
    (32, 11),
    (32, 12),
    (32, 13),
    (33, 11),
    (33, 12),
    (33, 13),
    (34, 11),
    (34, 12),
    (34, 13),
    (35, 11),
    (35, 12),
    (35, 13),
    (36, 11),
    (36, 12),
    (36, 13),
    (37, 11),
    (37, 12),
    (37, 13),
    (38, 11),
    (38, 12),
    (38, 13),
    (39, 11),
    (39, 12),
    (39, 13),
    (40, 11),
    (40, 12),
    (40, 13),
    (41, 11),
    (41, 12),
    (41, 13),
    (42, 11),
    (42, 12),
    (42, 13)
    