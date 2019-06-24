import React from "react";
import "./style.scss";

export default function index({ skill }) {
  return (
    <li className="skill">
      <img className="skill__img" src={skill.picture} alt={skill.skill} />
    </li>
  );
}
