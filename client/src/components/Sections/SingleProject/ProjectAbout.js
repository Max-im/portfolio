import React from 'react';
import Rate from './Rate';
import ProjectLinks from '../Projects/ProjectLinks';

export default function ProjectAbout({ project }) {
  return (
    <div className='project__aboutSection'>
      <h2 className='project__title'>{project.title}</h2>
      <p className='project__level'>{project.level}</p>
      <p className='project__date'>{new Date(project.date).toDateString()}</p>
      <p className='project__description'>{project.description}</p>
      <Rate />
      <ProjectLinks source={project.source} rootClass='project' />
    </div>
  );
}
