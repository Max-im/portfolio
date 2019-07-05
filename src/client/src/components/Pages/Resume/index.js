import React from "react";
import "./style.scss";
import Contacts from "../../Sections/Contacts";
import Skills from "../../Sections/Skills";
import Experience from "../../Sections/Experience";
import Summary from "../../Sections/Summary";
import Education from "../../Sections/Education";
import PageTitle from "../../Common/PageTitle";
import AddEdu from "../../Control/AddEdu";

export default function index() {
  return (
    <div className="page">
      <PageTitle text="resume" />

      <div className="container">
        {/* summary */}
        <Summary />

        {/* contacts */}
        <Contacts />

        {/* skills */}
        <Skills />

        {/* experience */}
        <Experience />

        {/* education */}
        <Education />

        {/* add edu */}
        <AddEdu />
      </div>
    </div>
  );
}
