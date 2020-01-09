import React from "react";
import ProjectCart from "./ProjectCart";

export default function ProjectsList({ projects }) {
  return (
    <section className="section projects">
      {projects && (
        <ul className="projects__list">
          {projects.map(project => (
            <ProjectCart project={project} key={project.id} />
          ))}
        </ul>
      )}
    </section>
  );
}
