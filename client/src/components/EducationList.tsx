import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Education, { IEducation } from './Education';

export default function EducationList() {
  const [edu, setEducation] = useState<null | IEducation[]>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/education')
      .then(({ data }) => setEducation(data))
      .catch(() => setError('error'));
  }, []);

  return (
    <>
      {edu && (
        <ul>
          {edu.map((item) => (
            <Education key={item.id} edu={item} />
          ))}
        </ul>
      )}
      {error && <>{error}</>}
    </>
  );
}
