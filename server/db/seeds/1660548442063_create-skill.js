module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('skills', [
        { id: 'html', displayName: 'HTML', icon: '/icons/html.png', category: 'frontend', active: true },
        { id: 'css', displayName: 'CSS', icon: '/icons/css.png', category: 'frontend', active: true },
        { id: 'scss', displayName: 'SCSS', icon: '/icons/sass.png', category: 'frontend', active: true },
        { id: 'less', displayName: 'LESS', icon: '/icons/less.png', category: 'frontend', active: true },
        { id: 'ejs', displayName: 'eJs', icon: '/icons/ejs.png', category: 'frontend', active: true },
        { id: 'javascript', displayName: 'JavaSciript', icon: '/icons/javascript.png', category: 'frontend', active: true },
        { id: 'react', displayName: 'React', icon: '/icons/react.png', category: 'frontend', active: true },
        { id: 'redux', displayName: 'Redux', icon: '/icons/redux.png', category: 'frontend', active: true },
        { id: 'vue', displayName: 'Vue', icon: '/icons/vue.png', category: 'frontend', active: true },
        { id: 'angular', displayName: 'Angular', icon: '/icons/angular.png', category: 'frontend', active: true },
        { id: 'canvas', displayName: 'Canvas', icon: '/icons/canvas.png', category: 'frontend', active: true },
        { id: 'nextjs', displayName: 'NextJS', icon: '/icons/nextjs.png', category: 'frontend', active: true },
        { id: 'handlebars', displayName: 'Handlebars', icon: '/icons/handlebars.png', category: 'frontend', active: true },
        { id: 'node', displayName: 'NodeJS', icon: '/icons/nodejs.png', category: 'backend', active: true },
        { id: 'typescript', displayName: 'TypeScript', icon: '/icons/typescript.png', category: 'backend', active: true },
        { id: 'nestjs', displayName: 'NestJS', icon: '/icons/nestjs.png', category: 'backend', active: true },
        { id: 'express', displayName: 'Express', icon: '/icons/express.png', category: 'backend', active: true },
        { id: 'socket-io', displayName: 'Socket.io', icon: '/icons/socketio.png', category: 'backend', active: true },
        { id: 'ruby', displayName: 'Ruby', icon: '', category: 'backend', active: false },
        { id: 'postgresql', displayName: 'PostgreSQL', icon: '/icons/postgresql.png', category: 'database', active: true },
        { id: 'mongodb', displayName: 'MongoDB', icon: '/icons/mongodb.png', category: 'database', active: true },
        { id: 'sequelize', displayName: 'Sequelize', icon: '/icons/sequelize.png', category: 'database', active: true },
        { id: 'typeorm', displayName: 'TypeORM', icon: '/icons/typeorm.png', category: 'database', active: true },
        { id: 'graphql', displayName: 'GraphQL', icon: '/icons/graphql.png', category: 'database', active: true },
        { id: 'prisma', displayName: 'Prisma', icon: '/icons/prisma.png', category: 'database', active: true },
        { id: 'redis', displayName: 'Redis', icon: '/icons/redis.png', category: 'database', active: true },
        { id: 'plsql', displayName: 'SQL', icon: '/icons/plsql.png', category: 'database', active: true },
        { id: 'kubernetes', displayName: 'Kubernetes', icon: '/icons/kubernetes.png' , category: 'cicd', active: true },
        { id: 'dockerfile', displayName: 'Docker', icon: '/icons/docker.png' , category: 'cicd', active: true },
        { id: 'aws', displayName: 'AWS', icon: '/icons/aws.png' , category: 'cicd', active: true },
        { id: 'jest', displayName: 'Jest', icon: '/icons/jest.png', category: 'cicd', active: true },
        { id: 'nats-streaming', displayName: 'Nats-Streaming', icon: '/icons/nats.png', category: 'cicd', active: true },
        { id: 'eslint', displayName: 'ESLint', icon: '/icons/eslint.png', category: 'other', active: true },
        { id: 'webpack', displayName: 'Webpack', icon: '/icons/webpack.png', category: 'other', active: true },
        { id: 'gulp', displayName: 'Gulp', icon: '/icons/gulp.png', category: 'other', active: true },
        { id: 'shell', displayName: 'Shell', icon: '/icons/shell.png', category: 'other', active: true }
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('skills', {});
    }
  };