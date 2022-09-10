import React from 'react';
import Experience, { IExperience } from './Experience';

export default function ExperienceList(params: { experience: IExperience[] }) {
  const experience = params.experience;

  return (
    <>
      {experience && (
        <ul>
          {experience.map((item) => (
            <Experience key={item.id} experience={item} />
          ))}
        </ul>
      )}
    </>
  );
}
