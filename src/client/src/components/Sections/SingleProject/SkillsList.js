import React from "react";

export default function SkillsList({ item }) {
  return (
    <ul className="aboutSingleProject__skills">
      {item.skills.map(skill => (
        <li className="aboutSingleProject__skill" key={skill.id}>
          <p className="aboutSingleProject__skillTooltip">{skill.title}</p>
          <img
            src={`/photo/${skill.picture}`}
            alt={skill.title}
            className="aboutSingleProject__skillImg"
          />
        </li>
      ))}
    </ul>
  );
}
