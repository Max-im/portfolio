import React from 'react';
import SkillItem from '../Skills/SkillItem';

export default function ProjectSkills({ skills }) {
  return (
    <section className="section">
      <h3>Used Tech</h3>
      <ul className="project__skills">
        {skills
          .sort((a, b) => a.range - b.range)
          .map((skill) => (
            <SkillItem skill={skill} key={skill.id} />
          ))}
      </ul>
    </section>
  );
}
