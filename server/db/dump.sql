DO $
$DECLARE r record;
BEGIN
    FOR r IN
    (SELECT tablename
    FROM pg_tables
    WHERE schemaname = current_schema())
    LOOP
    EXECUTE 'DROP TABLE IF EXISTS '
    || quote_ident
    (r.tablename) || ' CASCADE';
END LOOP;
END $$;


create TABLE users
(
    id SERIAL PRIMARY KEY,
    gid CHARACTER varying(64),
    name CHARACTER varying(128),
    email CHARACTER varying(128),
    avatar CHARACTER varying(128),
    isadmin BOOLEAN DEFAULT false
);

INSERT INTO users
    (id, gid, name, email, avatar, isadmin)
VALUES
    ( 1, '104819189707149372033', 'Maksim Pozhydaiev', 'pogidaevmo@gmail.com', 'https://lh3.googleusercontent.com/a-/AOh14GhqQRRNIk2JNmYJIhLYmSNnijzAsTaEBWvfATBv8Q=s96-c', true);

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
        'I am a deeply motivated Web developer, with strong knowledge in Node.js, React, Vue, MongoDb. I like studying new and awesome technologies and accomplish approaches with them in projects. Reliable and able to achieve established targets in set periods. It is important to me to see results of my work and to have an influence on the result.',
        'avatar.jpg',
        '[
            {"id": 1, "url": "https://facebook.com/max.pozhidaev.7", "name":"Facebook", "classes": "fab fa-facebook-square"},
            {"id": 2, "url": "https://linkedin.com/in/max-im", "name":"LinkedIn", "classes": "fab fa-linkedin"},
            {"id": 3, "url": "https://twitter.com/MPozhidayev", "name":"Twitter", "classes": "fab fa-twitter-square"},
            {"id": 4, "url": "https://github.com/max-im", "name":"GitHub", "classes": "fab fa-github-square"},
            {"id": 5, "url": "https://codepen.io/max-im", "name":"CodPen", "classes": "fab fa-codepen"}
        ]',
        '[
            {"id": 1, "value": "+38(050)77-23-169", "type":"text", "classes": "fas fa-phone", "meta": "phone"},
            {"id": 2, "value": "pogidaevmo@gmail.com", "type":"link", "classes": "fas fa-envelope", "meta": "email"},
            {"id": 3, "value": "pogidaev_mo", "type":"text", "classes": "fab fa-skype", "meta": "skype"}
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
    ('css', 1, 'css.png', 3, 'https://developer.mozilla.org/en-US/docs/Web/CSS'),
    ('js', 1, 'js.png', 2, 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'),
    ('sass', 1, 'sass.png', 2, 'https://sass-lang.com/'),
    ('jquery', 1, 'jquery.png', 2, 'https://jquery.com/'),
    ('angular', 1, 'angular.png', 1, 'https://angular.io/'),
    ('react', 1, 'react.png', 1, 'https://reactjs.org/'),
    ('redux', 1, 'redux.png', 1, 'https://redux.js.org/'),
    ('vue', 1, 'vue.png', 1, 'https://vuejs.org/'),
    ('ts', 1, 'ts.png', 1, 'https://www.typescriptlang.org/'),
    ('node', 2, 'node.png', 1, 'https://nodejs.org/en/'),
    ('rest', 3, 'rest.png', 2, 'https://developer.mozilla.org/en-US/docs/Glossary/REST'),
    ('mongodb', 3, 'mongodb.png', 1, 'https://www.mongodb.com/'),
    ('postgres', 3, 'psql.png', 1, 'https://www.postgresql.org/'),
    ('sequelize', 3, 'sequelize.png', 2, 'https://sequelize.org/'),
    ('mocha', 4, 'mocha.png', 2, 'https://mochajs.org/'),
    ('jest', 4, 'jest.png', 2, 'https://jestjs.io/'),
    ('babel', 5, 'babel.png', 3, 'https://babeljs.io/'),
    ('eslint', 5, 'eslint.png', 3, 'https://eslint.org/'),
    ('webpack', 5, 'webpack.png', 3, 'https://webpack.js.org/');



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
    ('Specialist', 'PrivatBank', '2006-03-01', '2007-06-01', false, 'privatbank.png', 'Conclusion of loan agreements; Attraction of consumers'),
    ('from Economist to Head of Department', 'Regional gas company', '2007-06-01', '2014-09-01', false, 'gorgaz.png', 'Control working processes of the department; Development a budget in terms and the number of staff; Conducting competitive bidding procedures.'),
    ('Engineer on the organization of work', 'Chernobyl nuclear power plant', '2014-09-15', '2018-01-08', false, 'chnpp.png', 'Participation in performance appraisal of workplaces; Performance of works on tariffing; Check of official and working instructions.'),
    ('JS Developer', 'iDeals solutions', '2018-01-09', '2019-09-06', false, 'ideals.png', 'Develop and maintain full stack applications, chrome extensions and google add-ons for automation of business processes; Use in my work: React, Redux, Vue, MongoDB, PostgreSQL, Nodejs.'),
    ('Web Develper', 'Astound Commerce', '2019-09-09', null, true, 'astound.png', 'Develop comprehensive E-Commerce Solutions on SalesForce platform with SFRA and SFCC approches; Implement inner applications for business automation, using Vue and Firebase.');


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
    description CHARACTER varying(1024),
    picture CHARACTER varying(128),
    date date DEFAULT CURRENT_TIMESTAMP,
    level INTEGER REFERENCES projectlevels(id),
    source JSON NOT NULL,
    comments JSON NOT NULL
);

-- insert
INSERT INTO projects
    (title, description, level, source, comments, picture)
VALUES
    ('Tires-shop', 'Page displays a wheel shop example', 2,
        '[
            {"id": 1, "url": "https://github.com/Max-im/tires-shop", "name": "GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/tires-shop/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'wheels_shop.jpg'
    ),
    ('Senior-citizen', 'Senior citizen landing page implemented on atomic platform', 3,
        '[
            {"id": 1, "url": "https://github.com/Max-im/senior-citizen-landing", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/senior-citizen/?p=pages-senior-citizen", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'senior_sitizen.jpg'
    ),
    ('Pingbuller', 'Landing page design example', 2,
        '[
            {"id": 1, "url": "https://github.com/Max-im/pingbuller", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/pingbuller/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'pinbuller.jpg'
    ),
    ('Building', 'Company page design example', 2,
        '[
            {"id": 1, "url": "https://github.com/Max-im/building", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/building/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'building.jpg'
    ),
    ('Holiday-dreams', 'Tourists servise page design example', 1,
        '[
            {"id": 1, "url": "https://github.com/Max-im/holiday-dreams", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/holiday-dreams/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'hollyday_dreams.jpg'
    ),
    ('Maxtogram-vue', 'SPA page similar to instagram implemented on Vue framework', 2,
        '[
            {"id": 1, "url": "https://github.com/Max-im/maxtagram-vue", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/maxtagram/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'maxtagram.jpg'
    ),
    ('Clothes-shop-page', 'Apparel shop SPA page implemented on Vue framework', 1,
        '[
            {"id": 1, "url": "https://github.com/Max-im/clothes-shop-page", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/clothes-page/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'clothes_shop.jpg'
    ),
    ('Weather-service', 'Weather service SPA page implemented on Vue framework', 2,
        '[
            {"id": 1, "url": "https://github.com/Max-im/weather", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/weather/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'weather_page.jpg'
    ),
    ('Resursable', 'SPA Page full of useful links for development implemented on React framework', 2,
        '[
            {"id": 1, "url": "https://github.com/Max-im/resursable", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/resursable/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'resursable.jpg'
    ),
    ('Angular-quick-start', 'SPA Page to display profile carts of people implemented on Angular framework', 2,
        '[
            {"id": 1, "url": "https://github.com/Max-im/angular-quick-start", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/angular-people", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        null
    ),
    ('Tutorials-list', 'SPA Page with many courses, games and news for developers implemented on React framework', 2,
        '[
            {"id": 1, "url": "https://github.com/Max-im/tutorials-list", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/tutorials/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'tutorials.jpg'
    ),
    ('Concerts', 'Concerts Page example SPA page implemented on React framework', 2,
        '[
            {"id": 1, "url": "https://github.com/Max-im/concerts", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/concerts/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'concerts.jpg'
    ),
    ('Restorant', 'Resorant page design', 2,
        '[
            {"id": 1, "url": "https://github.com/Max-im/restoran-page", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/restoran-page/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'restaurant.jpg'
    ),
    ('React-calendar-calc', 'SPA servise to compute number of days between 2 market dates implemented on React framework', 2,
        '[
            {"id": 1, "url": "https://github.com/Max-im/react-calendar-calc", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/calendar/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'calendar.jpg'
    ),
    ('Repo-list', 'SPA servise to display my repo list and to mark/unmark them implemented on React framework', 2,
        '[
            {"id": 1, "url": "https://github.com/Max-im/repo-list", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/repo-list/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'repo_list.jpg'
    ),
    ('Social-basic', 'Example of basic social network implemented on MERN stack', 2,
        '[
            {"id": 1, "url": "https://github.com/Max-im/social-basic", "name":"GitHub", "classes": "fab fa-git"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        null
    ),
    ('Furniture-shop', 'Furniture shop page', 1,
        '[
            {"id": 1, "url": "https://github.com/Max-im/furniture", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/furniture/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'furniture.jpg'
    ),
    ('Furniture-shop:Vue', 'Furniture shop page implemented on Vue framework', 1,
        '[
            {"id": 1, "url": "https://github.com/Max-im/furniture-shop", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/furniture-Shop-home/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'furniture.jpg'
    ),
    ('Quotes', 'Landing page design example', 2,
        '[
            {"id": 1, "url": "https://github.com/Max-im/quotes", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/quotes/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'quotes.jpg'
    ),
    ('Webcoders', 'Example meeting website page', 2,
        '[
            {"id": 1, "url": "https://github.com/Max-im/testWebCoder", "name":"GitHub", "classes": "fab fa-git"},
            {"id": 2, "url": "https://max-im.github.io/pages/WebCoders/", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'web_coders.jpg'
    ),
    ('Node-simple-page', 'Example of webpage, implemented on Node.js', 3,
        '[
            {"id": 1, "url": "https://github.com/Max-im/node-simple-page", "name":"GitHub", "classes": "fab fa-git"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        null
    ),
    ('Game:Arkanoid', 'Implementation arkanoid game', 2,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/mddaNmZ", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/mddaNmZ", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'arcanoid.jpg'
    ),
    ('Pattern:Factory', 'A Factory Method creates new objects as instructed by the client. One way to create objects in JavaScript is by invoking a constructor function with the new operator. There are situations however, where the client does not, or should not, know which one of several candidate objects to instantiate. The Factory Method allows the client to delegate object creation while still retaining control over which type to instantiate. The key objective of the Factory Method is extensibility. Factory Methods are frequently used in applications that manage, maintain, or manipulate collections of objects that are different but at the same time have many characteristics (i.e. methods and properties) in common. An example would be a collection of documents with a mix of Xml documents, Pdf documents, and Rtf documents.', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/abbRYVY", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/abbRYVY", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'pattern_factory.jpg'
    ),
    ('CSS:Filters', 'Visualisation of CSS Filters applying', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/abbXNab", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/abbXNab", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'css_filters.jpg'
    ),
    ('Algorithm:quickSort', 'Displaying algorithm of quick sort step by step', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/qBBgzeP", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/qBBgzeP", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'quick_sort.jpg'
    ),
    ('Algorithm:benchmark', 'Sample to help estimate performance different loops approches in scopes', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/KKKJOpp", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/KKKJOpp", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'benchmark.jpg'
    ),
    ('Game:BinarySearch', 'Game to help realise binary search approach', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/MWWLNae", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/MWWLNae", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'game_binary.jpg'
    ),
    ('Algorithm:k-neighbours', 'Visualisation of k-neighbours algorithm', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/JjjxgGO", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/JjjxgGO", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'k_neighbours_algo.jpg'
    ),
    ('CSS:clock', 'Simple clock on css', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/Rpapyq", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/Rpapyq", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'css_clock.jpg'
    ),
    ('Stopwatch', 'Stopwatch implementation', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/vYYwxoz", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/vYYwxoz", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'stopwatch.jpg'
    ),
    ('Menu:Accordion', 'Sample accordion menu implementation', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/WNNBjRr", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/WNNBjRr", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'accordion_menu.jpg'
    ),
    ('Dropdown:ajax', 'Beautiful dropdown list using ajax request', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/YzzbVVB", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/YzzbVVB", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'ajax_dropdown.jpg'
    ),
    ('MVC:todo', 'Todo list with MVC approach', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/YzzmKYj", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/YzzmKYj", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'mvc_todo.jpg'
    ),
    ('CSS:Variables', 'Sample to apply css variables', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/MWWNrYB", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/MWWNrYB", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'css_variables.jpg'
    ),
    ('FunCanvas', 'Canvas to draw fun pictures', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/vYYopNG", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/vYYopNG", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'fun_canvas.jpg'
    ),
    ('Effect:Woah', 'Cool effect to for performance', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/jOOgYqx", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/jOOgYqx", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'effect_woah.jpg'
    ),
    ('Effect:FollowLink', 'Awesome Menu and link hower effect', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/mddNpLw", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/mddNpLw", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'effect_follow_link.jpg'
    ),
    ('Effect:DragAndDropSlides', 'Slides with drag and drop effect', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/xxxvpaw", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/xxxvpaw", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'effect_scroll_menu.jpg'
    ),
    ('Effect:ToolTips', 'Sample of tooltips effect', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/wvvVpYX", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/wvvVpYX", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'effect_tooltip.jpg'
    ),
    ('Game:Tennis', 'Game where you can play tennis aganist computer', 2,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/JjjwgWB", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/JjjwgWB", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'game_tennis.jpg'
    ),
    ('Effect:GamburgerMenu', 'Gamburger menu example', 3 ,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/WoMZxw", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/WoMZxw", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'gamburger_menu.jpg'
    ),
    ('Pattern:Prototype', 'The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or sample - object. The Prototype pattern is also referred to as the Properties pattern. An example of where the Prototype pattern is useful is the initialization of business objects with values that match the default values in the database. The prototype object holds the default values that are copied over into a newly created business object. Classical languages rarely use the Prototype pattern, but JavaScript being a prototypal language uses this pattern in the construction of new objects and their prototypes.', 3 ,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/dyoOYwN", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/dyoOYwN", "name":"Open", "classes": "fas fa-desktop"}
        ]', '[]', 'pattern_prototype.jpg'
    ),
    ('Pattern:Builder', 'The Builder pattern allows a client to construct a complex object by specifying the type and content only. Construction details are hidden from the client entirely. The most common motivation for using Builder is to simplify client code that creates complex objects. The client can still direct the steps taken by the Builder without knowing how the actual work is accomplished. Builders frequently encapsulate construction of Composite objects (another GoF design pattern) because the procedures involved are often repetitive and complex. Usually it is the last step that returns the newly created object which makes it easy for a Builder to participate in fluent interfaces in which multiple method calls, separated by dot operators, are chained together', 3 ,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/oNXYXba", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/oNXYXba", "name":"Open", "classes": "fas fa-desktop"}
        ]', '[]', 'pattern_builder.jpg'
    ),
    ('Pattern:Strategy', 'The Strategy pattern encapsulates alternative algorithms (or strategies) for a particular task. It allows a method to be swapped out at runtime by any other method (strategy) without the client realizing it. Essentially, Strategy is a group of algorithms that are interchangeable. Say we like to test the performance of different sorting algorithms to an array of numbers: shell sort, heap sort, bubble sort, quicksort, etc. Applying the Strategy pattern to these algorithms allows the test program to loop through all algorithms, simply by changing them at runtime and test each of these against the array. For Strategy to work all method signatures must be the same so that they can vary without the client program knowing about it. In JavaScript the Strategy pattern is widely used as a plug-in mechanism when building extensible frameworks. This can be a very effective approach. To learn more check our JavaScript + jQuery Design Pattern Framework.', 3 ,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/gOpMNEj", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/gOpMNEj", "name":"Open", "classes": "fas fa-desktop"}
        ]', '[]', 'pattern_strategy.jpg'
    ),
    ('Pattern:Observer', 'The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs. This pattern is the cornerstone of event driven programming, including JavaScript. The Observer pattern facilitates good object-oriented design and promotes loose coupling. When building web apps you end up writing many event handlers. Event handlers are functions that will be notified when a certain event fires. These notifications optionally receive an event argument with details about the event (for example the x and y position of the mouse at a click event). The event and event-handler paradigm in JavaScript is the manifestation of the Observer design pattern. Another name for the Observer pattern is Pub/Sub, short for Publication/Subscription.', 3 ,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/rNVeRwO", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/rNVeRwO", "name":"Open", "classes": "fas fa-desktop"}
        ]', '[]', 'pattern_observer.jpg'
    ),
    ('Pattern:Singleton', 'The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton. Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application ensuring that no connections are "lost".Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions. The Module pattern (see our JavaScript + jQuery Design Pattern Framework) is JavaScript manifestation of the Singleton pattern. Several other patterns, such as, Factory, Prototype, and Façade are frequently implemented as Singletons when only one instance is needed.', 3 ,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/ExjKeZo", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/ExjKeZo", "name":"Open", "classes": "fas fa-desktop"}
        ]', '[]', null
    ),
    ('Pattern:Module', 'The Module Pattern allows implementing behavior and to hide details of the implementation, ensures encapsulation and private values in the closure in JavaScript.', 3 ,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/JjdGaGB", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/JjdGaGB", "name":"Open", "classes": "fas fa-desktop"}
        ]', '[]', 'pattern_module.jpg'
    ),
    ('Pattern:Adapter', 'The Adapter pattern translates one interface (an object properties and methods) to another. Adapters allows programming components to work together that otherwise wouldnt because of mismatched interfaces. One scenario where Adapters are commonly used is when new components need to be integrated and work together with existing components in the application. Another scenario is refactoring in which parts of the program are rewritten with an improved interface, but the old code still expects the original interface.', 3 ,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/KKpaEMv", "name":"CodePen", "classes": "fab fa-codepen"}
        ]', '[]', null
    ),
    ('Game:WhackAMole', 'Game where you need to catch a grounddog', 3,
        '[
            {"id": 1, "url": "https://codepen.io/max-im/pen/NWWQXEL", "name":"CodePen", "classes": "fab fa-codepen"},
            {"id": 2, "url": "https://codepen.io/max-im/full/NWWQXEL", "name":"Open", "classes": "fas fa-desktop"}
        ]',
        '[{"id": 1, "text":"lorem ipsume", "author": "user", "date": "2020/01/31"}]',
        'game_whack_mole.jpg'
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
    (42, 3),
    (43, 1),
    (43, 2),
    (43, 3),
    (44, 1),
    (44, 2),
    (44, 3),
    (45, 1),
    (45, 2),
    (45, 3),
    (46, 1),
    (46, 2),
    (46, 3),
    (47, 1),
    (47, 2),
    (47, 3),
    (48, 3),
    (49, 1),
    (49, 2),
    (49, 3);

CREATE TABLE projects_rate
(
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(id),
    user_id INTEGER REFERENCES users(id),
    vote BOOLEAN NOT NULL
);

-- insert
INSERT INTO projects_rate
    (project_id, user_id, vote)
VALUES
    (7, 1, true);

