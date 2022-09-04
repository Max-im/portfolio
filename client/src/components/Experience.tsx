import React from 'react';

export interface IExperience {
  id: number;
  description: string;
  organisation: string;
  from: string;
  to: string;
  icon: string;
}

export default function Experience(options: {experience: IExperience}) {
  const experience: IExperience = options.experience;

  return (
    (
      <li>
        <p>{experience.description}</p>
        <p>{new Date(experience.from).toISOString()}</p>
        <p>{new Date(experience.to).toISOString()}</p>
        <p>{experience.organisation}</p>
        <img src={experience.icon} alt={experience.organisation} />
      </li>
    )
  );
}
