import React from "react";
import SkillControl from "../../Control/SkillControl";
import "./style.scss";

export default function index({ skill, isadmin }) {
  const isDev = process.env.NODE_ENV === "development";
  const root = isDev ? "http://localhost:5000/" : "";
  let img_src = skill.skill_picture;
  if (!skill.skill_picture.match("^http")) {
    img_src = `${root}uploads/${skill.skill_picture}`;
  }

  return (
    <li className="skill">
      <a href={skill.source} target="_blank" rel="noopener noreferrer">
        <img className="skill__img" src={img_src} alt={skill.skill} />
      </a>

      {isadmin && <SkillControl id={skill.id} />}
    </li>
  );
}
