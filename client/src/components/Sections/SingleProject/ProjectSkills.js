import React from "react";
import SkillItem from '../Skills/SkillItem'

export default function ProjectSkills({ skills }) {
  return (
    <section className="section">
      <h3 className="section__title">Used Tech</h3>
      <ul className="project__skills">
        {skills.map(skill => (
          <SkillItem skill={skill} key={skill.id}/>
        ))}
      </ul>
    </section>
  );
}
