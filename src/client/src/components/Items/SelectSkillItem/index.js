import React from "react";

export default function index({ toggleSkill, skill, stateSkills }) {
  let imgUrl = skill.skill_picture;
  if (!skill.skill_picture.match("^http"))
    imgUrl = `/photo/${skill.skill_picture}`;

  return (
    <li
      onClick={toggleSkill.bind(null, skill.id)}
      className={
        stateSkills.includes(skill.id)
          ? "addProject__skill addProject__skill_active"
          : "addProject__skill"
      }
    >
      <img src={imgUrl} alt={skill.skill} />
    </li>
  );
}
