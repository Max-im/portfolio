import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, ...rest }) {
  return (
    <div className="projectItem__card">
      <Link to={'/portfolio/project/' + project.id}>
        <img src={`/photo/${project.picture}`} alt={project.title} className="projectItem__img" />
      </Link>
      <div className="projectItem__description">
        <p className="projectItem__title">{project.title}</p>
        <div className="projectItem__btns">
          {project.source.map((linkObj) => (
            <a className="projectItem__btn" href={linkObj.url} key={linkObj.id} target="_blank" rel="nofollow, noindex">
              <i className={linkObj.classes + ' projectItem__icon'} />
              {linkObj.name}
            </a>
          ))}
        </div>
        <p className="projectItem__date">{new Date(project.date).toDateString()}</p>
      </div>
    </div>
  );
}
