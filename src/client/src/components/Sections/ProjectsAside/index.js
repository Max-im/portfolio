import React from "react";
import "./style.scss";
import ProjectsFilter from "../ProjectsFilter";
import ProjectsSort from "../ProjectsSort";

export default function index() {
  return (
    <aside className="projectsAside">
      <ProjectsFilter />
      <ProjectsSort />
    </aside>
  );
}
