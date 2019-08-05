import React from "react";
import SkillControl from "../../Control/SkillControl";
import "./style.scss";

export default function index({ skill, isadmin }) {
  return (
    <li className="skill">
      <a href={skill.source} target="_blank" rel="noopener noreferrer">
        <img
          className="skill__img"
          src={`/uploads/${skill.skill_picture}`}
          alt={skill.skill}
        />
      </a>

      {isadmin && <SkillControl id={skill.id} />}
    </li>
  );
}
