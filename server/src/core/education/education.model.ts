import { DataTypes } from 'sequelize';
import { sequelize } from '../../data';

const Education = sequelize.define('educations', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  organisation: {type: DataTypes.STRING, allowNull: false}, 
  from: {type: DataTypes.DATE, allowNull: false},
  to: {type: DataTypes.DATE},
  description: {type: DataTypes.STRING, allowNull: false},
  icon: { type: DataTypes.STRING },
});

export { Education };
