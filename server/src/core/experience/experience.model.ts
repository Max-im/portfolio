import { DataTypes } from 'sequelize';
import { sequelize } from '../../data';

const Experience = sequelize.define('experiences', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  organisation: {type: DataTypes.STRING, allowNull: false},
  position: {type: DataTypes.STRING, allowNull: false},
  from: {type: DataTypes.DATE, allowNull: false},
  to: {type: DataTypes.DATE},
  description: {type: DataTypes.STRING, allowNull: false},
  icon: { type: DataTypes.STRING, allowNull: false }
});

export { Experience };
