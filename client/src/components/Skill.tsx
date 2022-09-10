import React from 'react';

export interface ISkillItem {
  id: string;
  displayName: string;
  icon: string;
}

export default function Skill(options: {skill: ISkillItem}) {
  const skill: ISkillItem = options.skill;

  return (
    (
      <li>
        <img width="42" src={skill.icon} alt={skill.id} />
      </li>
    )
  );
}
