import React from "react";
import "./style.scss";
import ProjectsList from "../../Sections/ProjectsList";

export default function index() {
  return (
    <div className="page">
      <h1 className="page__title">Portfolio</h1>
      <ProjectsList />
    </div>
  );
}
