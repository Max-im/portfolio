import React from 'react';

export interface ISkill {
  id: string;
  displayName: string;
  icon: string;
}

export default function Skill(options: {skill: ISkill}) {
  const skill: ISkill = options.skill;

  return (
    (
      <li>
        <img src={skill.icon} alt={skill.id} />
      </li>
    )
  );
}
