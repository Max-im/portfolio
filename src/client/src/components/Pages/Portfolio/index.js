import React from "react";
import "./style.scss";
import PageTitle from "../../Common/PageTitle";

import ProjectsList from "../../Sections/Projects/ProjectsList";
import ProjectsPagination from "../../Sections/Projects/ProjectsPagination";

export default function index() {
  return (
    <div className="page portfolio">
      <PageTitle text="Portfolio" />

      <div className="portfolio__projects">
        <ProjectsList />
        <ProjectsPagination />
      </div>
    </div>
  );
}
