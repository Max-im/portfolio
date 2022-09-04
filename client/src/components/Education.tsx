import React from 'react';

export interface IEducation {
  id: number;
  description: string;
  organisation: string;
  from: string;
  to: string;
  icon: string;
}

export default function Education(options: {edu: IEducation}) {
  const edu: IEducation = options.edu;

  return (
    (
      <li>
        <p>{edu.description}</p>
        <p>{new Date(edu.from).toISOString()}</p>
        <p>{new Date(edu.to).toISOString()}</p>
        <p>{edu.organisation}</p>
        <img src={edu.icon} alt={edu.organisation} />
      </li>
    )
  );
}
