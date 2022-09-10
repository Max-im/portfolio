import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bio, { IBio } from '../components/Bio';
import EducationList from '../components/EducationList';
import ExperienceList from '../components/ExperienceList';
import SkillsList, { ISkill } from '../components/SkillsList';
import { IEducation } from '../components/Education';
import { IExperience } from '../components/Experience';

export default function Resume() {
  const [ready, setReady] = useState<boolean>(false);
  const [bio, setBio] = useState<null | IBio>(null);
  const [educations, setEducation] = useState<null | IEducation[]>(null);
  const [experience, setExperience] = useState<null | IExperience[]>(null);
  const [skills, setSkills] = useState<null | ISkill[]>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    axios
      .get('/resume')
      .then(({ data }) => {
        setBio(data.bio);
        setEducation(data.education);
        setExperience(data.experience);
        setSkills(data.skills);
        setReady(true);
      })
      .catch(() => setError('error'));
  }, []);

  return (
    <>
      {ready && (
        <>
          <Bio bio={bio!} />
          <SkillsList skills={skills!} />
          <EducationList educations={educations!} />
          <ExperienceList experience={experience!} />
        </>
      )}
      {error && <p>error</p>}
    </>
  );
}
