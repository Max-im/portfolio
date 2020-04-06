import React from "react";

export default function ProjectAbout({ project }) {
  return (
    <section className="section">
      <p className="project__description">{project.description}</p>
      <p className="project__date">{new Date(project.date).toDateString()}</p>
      <p className="project__level">{project.level}</p>
    </section>
  );
}
