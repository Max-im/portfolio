import React from "react";
import "./style.scss";
import PageTitle from "../../Common/PageTitle";
import ProjectsAside from "../../Sections/Projects/Aside";
import ProjectsList from "../../Sections/Projects/ProjectsList";
import ProjectsPagination from "../../Sections/Projects/ProjectsPagination";

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
            <ProjectsList />
            <ProjectsPagination />
          </div>
        </div>
      </div>
    </div>
  );
}
