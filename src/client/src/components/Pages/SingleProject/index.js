import React from "react";
import "./style.scss";
import PageTitle from "../../Common/PageTitle";
import SingleCommon from "../../Sections/SingleProject/SingleCommon";
import SingleControl from "../../Sections/SingleProject/SingleControll";
import ProjectRate from "../../Sections/SingleProject/ProjectRate";
import Comments from "../../Sections/SingleProject/Comments";

export default function index() {
  return (
    <div className="page">
      <PageTitle text="Project" />
      <div className="container">
        <SingleCommon />
        {/* TODO aside similar */}
        <SingleControl />
        <ProjectRate />
        <Comments />
      </div>
    </div>
  );
}
