import React from 'react';
import { Link } from 'react-router-dom';

export default function SimilarList({ project }) {
  return (
    <>
      <Link className='project__similarLink' to={'/portfolio/project/' + project.id}>
        <img src={'/photo/' + project.picture} className='project__similarImg' />
        <h4 className='project__similarTitle'>{project.title}</h4>
      </Link>
    </>
  );
}
