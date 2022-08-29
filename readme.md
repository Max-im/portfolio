# Portfolio

Personal portfolio application
for perform own skills and represent made projects.

## Features

```sh
Fullstack application
Authentication system
Logging system
PDF CV downloading
SQL migrations
SQL seeds
SQL one-to-many and many-to-many relations
Automatic information creating / updating
Testing
CI/CD deploying
```

## Tech

```sh
Typescript
Express
Node
PostgreSQL
Sequelize
React
Redux
GitHub API
```

## Installation

Portfolio requires [Node.js](https://nodejs.org/) to run.

### Run in development mode

```sh
cd portfolio/server
prepare file .env-cmdrc from .env-cmdrc-example
npm i
npm run dev
```

### Run in test mode

```sh
cd portfolio/server
prepare file .env-cmdrc from .env-cmdrc-example
npm i
npm run test
```

### Build production version

```sh
npm run start
```

## API

### Skill

| method | url    | body | description     |
| ------ | ------ | ---- | --------------- |
| GET    | /skill | -    | get skills list |

### Resume

| method | url     | body | description     |
| ------ | ------- | ---- | --------------- |
| GET    | /resume | -    | get resume data |

### Project

| method | url      | body | description       |
| ------ | -------- | ---- | ----------------- |
| GET    | /project | -    | get projects data |

### Education

| method | url        | body | description         |
| ------ | ---------- | ---- | ------------------- |
| GET    | /education | -    | get educations list |

### Experience

| method | url         | body | description         |
| ------ | ----------- | ---- | ------------------- |
| GET    | /experience | -    | get experience list |

### Comment
### CV
### User
### Like
