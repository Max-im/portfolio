import React from 'react';
import Education, { IEducation } from './Education';

export default function EducationList(params: { educations: IEducation[] }) {
  const edu = params.educations;

  return (
    <>
      {edu && (
        <ul>
          {edu.map((item) => (
            <Education key={item.id} edu={item} />
          ))}
        </ul>
      )}
    </>
  );
}
