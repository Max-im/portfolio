import React from 'react';

export default function ProjectImg({ project }) {
  return (
    <div className='project__pictureSection'>
      <img src={'/photo/' + project.picture} alt={project.title} className='project__picture' />
    </div>
  );
}
