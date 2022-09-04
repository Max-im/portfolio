import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Experience, { IExperience } from './Experience';

export default function ExperienceList() {
  const [experience, setExperience] = useState<null | IExperience[]>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/experience')
      .then(({ data }) => setExperience(data))
      .catch(() => setError('error'));
  }, []);

  return (
    <>
      {experience && (
        <ul>
          {experience.map((item) => (
            <Experience key={item.id} experience={item} />
          ))}
        </ul>
      )}
      {error && <>{error}</>}
    </>
  );
}
