import React from "react";
import "./style.scss";
import ProjectsList from "../../Sections/ProjectsList";
import PageTitle from "../../Common/PageTitle";
import AddProject from "../../Control/AddProject";

export default function index() {
  return (
    <div className="page">
      <PageTitle text="Portfolio" />
      <div className="container">
        {/* add promect */}
        <AddProject />
        <ProjectsList />
      </div>
    </div>
  );
}
