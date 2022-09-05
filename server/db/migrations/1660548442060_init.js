module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = Sequelize.DataTypes;
    return Promise.all([
      queryInterface.createTable('skills', {
        id: { type: DataTypes.STRING, primaryKey: true },
        displayName: { type: DataTypes.STRING, unique: true },
        icon: { type: DataTypes.STRING, defaultValue: '' },
        active: { type: DataTypes.BOOLEAN, defaultValue: true },
        createdAt: { type: DataTypes.DATE, defaultValue: new Date() },
        updatedAt: { type: DataTypes.DATE, defaultValue: new Date() },
        category: {
          type: DataTypes.ENUM('backend', 'frontend', 'cicd', 'database', 'other'),
          defaultValue: 'other',
        }
      }),
      queryInterface.createTable('educations', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        organisation: { type: DataTypes.STRING, allowNull: false },
        from: { type: DataTypes.DATE, allowNull: false },
        to: { type: DataTypes.DATE },
        description: { type: DataTypes.STRING, allowNull: false },
        icon: { type: DataTypes.STRING },
        createdAt: { type: DataTypes.DATE, defaultValue: new Date() },
        updatedAt: { type: DataTypes.DATE },
      }),
      queryInterface.createTable('experiences', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        organisation: { type: DataTypes.STRING, allowNull: false },
        from: { type: DataTypes.DATE, allowNull: false },
        to: { type: DataTypes.DATE },
        description: { type: DataTypes.STRING, allowNull: false },
        icon: { type: DataTypes.STRING }, 
        createdAt: { type: DataTypes.DATE, defaultValue: new Date() },
        updatedAt: { type: DataTypes.DATE },
      }),
      queryInterface.createTable('users', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        avatar: { type: DataTypes.STRING },
        createdAt: { type: DataTypes.DATE, defaultValue: new Date() },
        updatedAt: { type: DataTypes.DATE },
      }),
      queryInterface.createTable('resumes', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        photo: { type: DataTypes.STRING },
        name: { type: DataTypes.STRING },
        bio: { type: DataTypes.STRING },
        createdAt: { type: DataTypes.DATE, defaultValue: new Date() },
        updatedAt: { type: DataTypes.DATE },
      }),
      queryInterface.createTable('projects', {
        id: { type: DataTypes.INTEGER, primaryKey: true, unique: true },
        title: { type: DataTypes.STRING },
        githubUrl: { type: DataTypes.STRING, allowNull: false },
        repoUpdateTimestamp: { type: DataTypes.DATE, allowNull: false },
        storefrontUrl: { type: DataTypes.STRING },
        shortDescription: { type: DataTypes.STRING },
        description: { type: DataTypes.TEXT },
        thumbnail: { type: DataTypes.STRING },
        topics: { type: DataTypes.STRING },
        createdAt: { type: DataTypes.DATE, defaultValue: new Date() },
        updatedAt: { type: DataTypes.DATE },
      }),
      queryInterface.createTable('comments', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        text: { type: DataTypes.STRING },
        createdAt: { type: DataTypes.DATE, defaultValue: new Date() },
        updatedAt: { type: DataTypes.DATE },
        user_id: {
          type: DataTypes.INTEGER,
          references: {
            model: { tableName: 'users' },
            key: 'id',
          },
          allowNull: false,
        },
      }),
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable('educations'),
      queryInterface.dropTable('experiences'),
      queryInterface.dropTable('comments'),
      queryInterface.dropTable('skills'),
      queryInterface.dropTable('projects'),
      queryInterface.dropTable('resumes'),
      queryInterface.dropTable('users'),
    ]);
  },
};
