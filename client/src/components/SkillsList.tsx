import React from 'react';
import Skill, { ISkillItem } from './Skill';

export interface ISkill {
  id: string;
  displayName: string;
  icon: string;
  category: string;
}

export default function SkillsList(params: { skills: ISkill[] }) {
  const skills: { [key: string]: ISkillItem[] } = {};

  params.skills.forEach((skill: ISkill) => {
    skills[skill.category] = skills[skill.category] || [];
    skills[skill.category].push({ id: skill.id, displayName: skill.displayName, icon: skill.icon });
  });

  return (
    <>
      {Object.keys(skills).length &&
        Object.keys(skills).map((category) => (
          <div key={category}>
            {category}
            <ul style={{ display: 'flex' }}>
              {skills[category].map((skill) => (
                <Skill key={skill.id} skill={skill} />
              ))}
            </ul>
          </div>
        ))}
    </>
  );
}
