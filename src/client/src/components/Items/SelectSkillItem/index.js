import React from "react";

export default function index({ toggleSkill, skill, stateSkills }) {
  return (
    <li
      onClick={toggleSkill.bind(null, skill.id)}
      className={
        stateSkills.includes(skill.id)
          ? "addProject__skill addProject__skill_active"
          : "addProject__skill"
      }
    >
      <img src={`/photo/${skill.skill_picture}`} alt={skill.skill} />
    </li>
  );
}
