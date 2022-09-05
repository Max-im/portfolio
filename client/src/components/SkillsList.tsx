import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skill, { ISkill } from './Skill';

interface SkillsData {
  [key: string]: ISkill[]
}

export default function SkillsList() {
  const [skills, setSkills] = useState<null | SkillsData>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    axios
      .get('/skill')
      .then(({ data }) => {
        setSkills(data);
      })
      .catch(() => setError('error'));
  }, []);

  return (
    <>
      {skills &&
        Object.keys(skills).map((category) => (
          <div key={category}>
            {category}
            <ul>
              {skills[category].map((skill) => (
                <Skill key={skill.id} skill={skill} />
              ))}
            </ul>
          </div>
        ))}
      {error && <>{error}</>}
    </>
  );
}
