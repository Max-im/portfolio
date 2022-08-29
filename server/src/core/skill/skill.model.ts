import { DataTypes } from 'sequelize';
import { sequelize } from '../../data';

const Skill = sequelize.define('skills', {
  id: { type: DataTypes.STRING, primaryKey: true },
  displayName: { type: DataTypes.STRING, unique: true },
  icon: { type: DataTypes.STRING, defaultValue: '' },
  category: { type: DataTypes.ENUM('backend', 'frontend', 'cicd', 'database', 'other'), defaultValue: 'other'},
});

export { Skill };
