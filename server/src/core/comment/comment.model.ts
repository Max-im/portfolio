import { DataTypes } from 'sequelize';
import { sequelize } from '../../data';

const Comment = sequelize.define('comments', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  text: { type: DataTypes.STRING },
});

export { Comment };
