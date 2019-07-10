import React from "react";

export default function index({ skill }) {
  return (
    <a href={skill.source} target="_blank" rel="noopener noreferrer">
      <img className="skill__img" src={skill.skill_picture} alt={skill.skill} />
    </a>
  );
}
