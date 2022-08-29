import { DataTypes } from 'sequelize';
import { sequelize } from '../../data';

const User = sequelize.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  avatar: { type: DataTypes.STRING },
});

export { User };
