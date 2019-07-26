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

      <div className="container">
        <div className="portfolio__body">
          <div className="portfolio__aside">
            <ProjectsAside />
          </div>

          <div className="portfolio__projects">
            {/* projects list */}
            <ProjectsList />

            {/* pagination */}
            <ProjectsPagination />
            {/* add promect */}
            <AddProject />
          </div>
        </div>
      </div>
    </div>
  );
}
