import { DataTypes } from 'sequelize';
import { sequelize } from '../../data';

const Resume = sequelize.define('resume', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  photo: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  bio: { type: DataTypes.STRING },
});

export { Resume };
