import React from "react";

export default function SkillsList({ skills }) {
  return (
    <ul className="projectSkillsList">
      {skills
        .filter((j, i) => i < 8)
        .map(skill => (
          <li className="projectSkillsList__item" key={skill.id}>
            <img
              src={`/photo/${skill.icon}`}
              alt={skill.title}
              className="projectSkillsList__img"
            />
          </li>
        ))}
    </ul>
  );
}
