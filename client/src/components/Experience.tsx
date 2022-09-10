import React from 'react';

export interface IExperience {
  id: number;
  position: string;
  description: string;
  organisation: string;
  from: string;
  to: string;
  icon: string;
}

export default function Experience(options: { experience: IExperience }) {
  const experience: IExperience = options.experience;

  return (
    <li style={{display: 'flex'}}>
      <img width="72" src={experience.icon} alt={experience.organisation} />
      <div>
        <p>{experience.organisation}</p>
        <p>{experience.position}</p>
        <p>{new Date(experience.from).toISOString()}</p>
        <p>{new Date(experience.to).toISOString()}</p>
        <p>{experience.description}</p>
      </div>
    </li>
  );
}
