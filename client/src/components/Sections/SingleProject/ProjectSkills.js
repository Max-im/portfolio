import React from 'react';

export default function ProjectSkills({ skills }) {
  return (
    <ul>
      {skills.map(skill => (
        <li>
          <img alt={skill.name} src={"/photo/"+skill.icon} />
        </li>
      ))}
    </ul>
  );
}
