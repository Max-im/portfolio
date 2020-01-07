import React from "react";

export default function index({ skill }) {
  return (
    <li
      data-order={skill.category}
      className={"skill mix cat" + skill.category}
    >
      <a
        href={skill.url}
        target="_blank"
        rel="noopener noreferrer"
        className="skill__link"
      >
        <div className="skill__imgWrap">
          <img
            className="skill__img"
            src={`/photo/${skill.icon}`}
            alt={skill.name}
          />
        </div>
        <p className="skill__text">{skill.name}</p>
      </a>
    </li>
  );
}
