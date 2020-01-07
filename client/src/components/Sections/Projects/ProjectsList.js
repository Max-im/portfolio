import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectsList({ projects }) {
  return (
    <section className="section projects">
      {projects && (
        <ul className="projects__list">
          {projects.map(project => (
            <ProjectItem project={project} key={project.id} />
          ))}
        </ul>
      )}
    </section>
  );
}
