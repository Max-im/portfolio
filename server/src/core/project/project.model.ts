import { DataTypes } from 'sequelize';
import { sequelize } from '../../data';

const Project = sequelize.define('projects', {
  id: { type: DataTypes.INTEGER, primaryKey: true, unique: true },
  title: { type: DataTypes.STRING, allowNull: false },
  githubUrl: { type: DataTypes.STRING, allowNull: false },
  repoUpdateTimestamp: { type: DataTypes.DATE, allowNull: false },
  storefrontUrl: { type: DataTypes.STRING, defaultValue: '' },
  shortDescription: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  thumbnail: { type: DataTypes.STRING },
  topics: { type: DataTypes.ARRAY(DataTypes.DECIMAL) }
});

export { Project };
