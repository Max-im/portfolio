import React from "react";
import "./style.scss";
import PageTitle from "../../Common/PageTitle";
import SingleProjectCommon from "../../Sections/SingleProjectCommon";
import Comments from "../../Sections/Comments";
import SingleControl from "../../Sections/SingleControl";
import ProjectRate from "../../Sections/ProjectRate";

export default function index() {
  return (
    <div className="page">
      <PageTitle text="Project" />
      <div className="container">
        {/* common data */}
        <SingleProjectCommon />

        {/* aside similar */}

        {/* rate */}
        <ProjectRate />

        {/* admin */}
        <SingleControl />

        {/* comments */}
        <Comments />
      </div>
    </div>
  );
}
