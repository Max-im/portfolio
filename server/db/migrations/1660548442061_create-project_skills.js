module.exports = {
  up: (queryInterface, Sequelize) => {
    const DataTypes = Sequelize.DataTypes;
    return queryInterface.createTable('project_skills', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      projectId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: { tableName: 'projects' },
          key: 'id',
        },
        allowNull: false,
      },
      skillId: {
        type: DataTypes.STRING,
        onDelete: 'CASCADE',
        references: {
          model: { tableName: 'skills' },
          key: 'id',
        },
        allowNull: false,
      },
      createdAt: { type: DataTypes.DATE, defaultValue: new Date() },
      updatedAt: { type: DataTypes.DATE, defaultValue: new Date() },
    });
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable('project_skills'),
    ]);
  },
};
