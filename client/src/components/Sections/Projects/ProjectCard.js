import React from 'react';
import { Link } from 'react-router-dom';
import SkillsList from './SkillsList';

export default function ProjectCard({ project, ...rest }) {
  return (
    <>
      <Link to={'/portfolio/project/' + project.id} className="projectItem__link">
        <img src={`/photo/${project.picture}`} alt={project.title} className="projectItem__img" />
        <div className="projectItem__body">
          <p className="projectItem__title">{project.title}</p>
          <div className="projectItem__meta">
            <p className="projectItem__level">{project.level}</p>
            <SkillsList skills={project.skills} />
          </div>
          <p className="projectItem__date">{new Date(project.date).toDateString()}</p>
        </div>
      </Link>
    </>
  );
}
