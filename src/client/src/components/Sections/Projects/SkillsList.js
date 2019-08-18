import React from "react";

export default function SkillsList({ item }) {
  return (
    <ul className="projectSkillsList">
      {item.skills
        .filter((j, i) => i < 8)
        .map(skill => (
          <li className="projectSkillsList__item" key={skill.id}>
            <img
              src={`/photo/${skill.picture}`}
              alt={skill.title}
              className="projectSkillsList__img"
            />
          </li>
        ))}
    </ul>
  );
}
