import React from "react";
import "./style.scss";
import PageTitle from "../../Common/PageTitle";
import SingleProjectCommon from "../../Sections/SingleProjectCommon";
import Comments from "../../Sections/Comments";
import SingleControl from "../../Sections/SingleControl";

export default function index() {
  return (
    <div className="page">
      <PageTitle text="Project" />
      <div className="container">
        <SingleProjectCommon />
        {/* aside similar */}
        {/* rate */}
        {/* admin */}
        <SingleControl />
        {/* comments */}
        <Comments />
      </div>
    </div>
  );
}
