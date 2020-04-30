import React from 'react';
import Source from './Source';
import Rate from './Rate';

export default function ProjectAside({ project }) {
  return (
    <div>
      <Source source={project.source} />
      <Rate />
    </div>
  );
}
