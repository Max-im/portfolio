import React from "react";

export default function ProjectSkills({ skills }) {
  return (
    <section className="section">
      <h3 className="section__title">Used Tech</h3>
      <ul className="project__skills">
        {skills.map(skill => (
          <li key={skill.id} className="project__skill">
            <img
              alt={skill.name}
              src={"/photo/" + skill.icon}
              className="project__skillImg"
            />
            <p className="social__tooltip">{skill.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
