import React from "react";
import ProjectItem from "./ProjectItem";
import Shown from '../../hoc/Shown';

export default function ProjectsList({ projects }) {
  return (
    <section className="section projects">
      {projects && (
        <ul className="projects__list">
          {projects.map(project => (
            <Shown component={ProjectItem} project={project} key={project.id} className="projectItem"/>
          ))}
        </ul>
      )}
    </section>
  );
}
