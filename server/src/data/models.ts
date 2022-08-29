import { sequelize } from './index';
import { DataTypes } from 'sequelize';
import { Skill } from '../core/skill/skill.model';
import { Project } from '../core/project/project.model';
import { Experience } from '../core/experience/experience.model';
import { Education } from '../core/education/education.model';
import { Resume } from '../core/resume/resume.model';
import { Comment } from '../core/comment/comment.model';
import { User } from '../core/user/user.model';

const ProjectSkills = sequelize.define('project_skills', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

Project.belongsToMany(Skill, { through: ProjectSkills, foreignKey: 'projectId' });
Skill.belongsToMany(Project, { through: ProjectSkills, foreignKey: 'skillId' });

Project.hasMany(Comment);
Comment.belongsTo(Project);

User.hasMany(Comment);
Comment.belongsTo(User);

export { Skill, Project, Experience, Education, Resume, Comment, ProjectSkills, User };
