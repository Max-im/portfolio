import React from "react";

export default function index({ toggleSkill, skill, stateSkills }) {
  const isDev = process.env.NODE_ENV === "development";
  const root = isDev ? "http://localhost:5000/uploads/" : "";
  let imgUrl = skill.skill_picture;
  if (!skill.skill_picture.match("^http"))
    imgUrl = `${root}${skill.skill_picture}`;

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
