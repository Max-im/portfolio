import React from "react";
import SingleProjectCommon from "../../Sections/SingleProjectCommon";
import "./style.scss";
import PageTitle from "../../Common/PageTitle";

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
      </div>
    </div>
  );
}
