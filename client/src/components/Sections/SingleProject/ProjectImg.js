import React from "react";

export default function ProjectImg({ project }) {
  return (
    <section className="project__pictureSection">
      <img
        src={"/photo/"+project.picture}
        alt={project.title}
        className="project__picture"
      />
    </section>
  );
}
