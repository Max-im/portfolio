module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('skills', [
        { id: 'html', displayName: 'HTML', icon: '', category: 'frontend' },
        { id: 'css', displayName: 'CSS', icon: '', category: 'frontend' },
        { id: 'scss', displayName: 'SCSS', icon: '', category: 'frontend' },
        { id: 'less', displayName: 'LESS', icon: '', category: 'frontend' },
        { id: 'ejs', displayName: 'eJs', icon: '', category: 'frontend' },
        { id: 'javascript', displayName: 'JavaSciript', icon: '', category: 'frontend' },
        { id: 'react', displayName: 'React', icon: '', category: 'frontend' },
        { id: 'redux', displayName: 'Redux', icon: '', category: 'frontend' },
        { id: 'vue', displayName: 'Vue', icon: '', category: 'frontend' },
        { id: 'angular', displayName: 'Angular', icon: '', category: 'frontend' },
        { id: 'canvas', displayName: 'Canvas', icon: '', category: 'frontend' },
        { id: 'nextjs', displayName: 'NextJS', icon: '', category: 'frontend' },
        { id: 'handlebars', displayName: 'Handlebars', icon: '', category: 'frontend' },
        { id: 'node', displayName: 'NodeJS', icon: '', category: 'backend' },
        { id: 'typescript', displayName: 'TypeScript', icon: '', category: 'backend' },
        { id: 'nestjs', displayName: 'NestJS', icon: '', category: 'backend' },
        { id: 'express', displayName: 'Express', icon: '', category: 'backend' },
        { id: 'socket-io', displayName: 'Socket.io', icon: '', category: 'backend' },
        { id: 'ruby', displayName: 'Ruby', icon: '', category: 'backend' },
        { id: 'postgresql', displayName: 'PostgreSQL', icon: '', category: 'database' },
        { id: 'mongodb', displayName: 'MongoDB', icon: '', category: 'database' },
        { id: 'sequelize', displayName: 'Sequelize', icon: '', category: 'database' },
        { id: 'typeorm', displayName: 'TypeORM', icon: '', category: 'database' },
        { id: 'graphql', displayName: 'GraphQL', icon: '', category: 'database' },
        { id: 'prisma', displayName: 'Prisma', icon: '', category: 'database' },
        { id: 'redis', displayName: 'Redis', icon: '', category: 'database' },
        { id: 'plsql', displayName: 'SQL', icon: '', category: 'database' },
        { id: 'kubernetes', displayName: 'Kubernetes', icon: '' , category: 'cicd' },
        { id: 'dockerfile', displayName: 'Docker', icon: '' , category: 'cicd' },
        { id: 'aws', displayName: 'AWS', icon: '' , category: 'cicd' },
        { id: 'jest', displayName: 'Jest', icon: '', category: 'cicd' },
        { id: 'nats-streaming', displayName: 'Nats-Streaming', icon: '', category: 'cicd' },
        { id: 'eslint', displayName: 'ESLint', icon: '', category: 'other' },
        { id: 'webpack', displayName: 'Webpack', icon: '', category: 'other' },
        { id: 'gulp', displayName: 'Gulp', icon: '', category: 'other' },
        { id: 'shell', displayName: 'Shell', icon: '', category: 'other' }
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('skills', {});
    }
  };