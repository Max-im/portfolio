import React from "react";
import "./style.scss";
import ProjectsList from "../../Sections/ProjectsList";
import PageTitle from "../../Common/PageTitle";
import AddProject from "../../Control/AddProject";
import ProjectsPagination from "../../Items/ProjectsPagination";
import ProjectsAside from "../../Sections/ProjectsAside";

export default function index() {
  return (
    <div className="page">
      <PageTitle text="Portfolio" />

      <ProjectsAside />

      <div className="container">
        {/* add promect */}
        <AddProject />

        {/* projects list */}
        <ProjectsList />

        {/* pagination */}
        <ProjectsPagination />
      </div>
    </div>
  );
}
