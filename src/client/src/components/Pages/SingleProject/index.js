import React from "react";
import "./style.scss";
import PageTitle from "../../Common/PageTitle";
import SingleProjectCommon from "../../Sections/SingleProjectCommon";
import Comments from "../../Sections/Comments";

export default function index() {
  return (
    <div className="page">
      <PageTitle text="Project" />
      <div className="container">
        <SingleProjectCommon />
        {/* aside similar */}
        {/* rate */}
        {/* admin */}
        {/* comments */}
        <Comments />
      </div>
    </div>
  );
}
