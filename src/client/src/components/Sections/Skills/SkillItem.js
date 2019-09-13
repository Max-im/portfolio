import React from "react";
import SkillControl from "./SkillControl";

export default function index({ skill, isadmin, active }) {
  return (
    <li
      className={
        active.includes(skill.category_id) ? "skill" : "skill skill_hide"
      }
    >
      <a
        href={skill.source}
        target="_blank"
        rel="noopener noreferrer"
        className="skill__link"
      >
        <div className="skill__imgWrap">
          <img
            className="skill__img"
            src={`/photo/${skill.skill_picture}`}
            alt={skill.skill}
          />
        </div>
        <p className="skill__text">{skill.skill}</p>
      </a>
      {isadmin && <SkillControl id={skill.id} />}
    </li>
  );
}
