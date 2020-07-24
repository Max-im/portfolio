import React from 'react';
import { Link } from 'react-router-dom';
import ProjectLinks from './ProjectLinks';

export default function ProjectCard({ project, ...rest }) {
  return (
    <div className="projectItem__card">
      <Link to={'/portfolio/project/' + project.id}>
        <img src={`/photo/${project.picture}`} alt={project.title} className="projectItem__img" />
      </Link>
      <div className="projectItem__description">
        <p className="projectItem__title">{project.title}</p>
        <ProjectLinks source={project.source} rootClass="projectItem" />
        <p className="projectItem__date">{new Date(project.date).toDateString()}</p>
      </div>
    </div>
  );
}
