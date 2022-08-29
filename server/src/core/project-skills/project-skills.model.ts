import { DataTypes } from 'sequelize';
import { sequelize } from '../../data';

const ProjectSkills = sequelize.define('projects', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

export { ProjectSkills };