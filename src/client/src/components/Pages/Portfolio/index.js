import React from "react";
import "./style.scss";
import ProjectsList from "../../Sections/ProjectsList";
import PageTitle from "../../Common/PageTitle";

export default function index() {
  return (
    <div className="page">
      <PageTitle text="Portfolio" />
      <div className="container">
        <ProjectsList />
        {/* admin */}
      </div>
    </div>
  );
}
