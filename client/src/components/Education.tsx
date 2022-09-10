import React from 'react';

export interface IEducation {
  id: number;
  description: string;
  organisation: string;
  from: string;
  to: string;
  icon: string;
}

export default function Education(options: { edu: IEducation }) {
  const edu: IEducation = options.edu;

  return (
    <li style={{display: 'flex'}} >
      <img width="72" src={edu.icon} alt={edu.organisation} />
      <div>
        <p>{edu.organisation}</p>
        <p>{new Date(edu.from).toISOString()}</p>
        <p>{new Date(edu.to).toISOString()}</p>
        <p>{edu.description}</p>
      </div>
    </li>
  );
}
