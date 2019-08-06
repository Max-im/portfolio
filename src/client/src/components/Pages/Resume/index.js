import React from "react";
import PageTitle from "../../Common/PageTitle";
import Summary from "../../Sections/Summary/Summary";
import Contacts from "../../Sections/Contacts/Contacts";
import Skills from "../../Sections/Skills/Skills";
import Experience from "../../Sections/Experience/Experience";
import Education from "../../Sections/Education/Education";
import "./style.scss";

export default function Resume() {
  return (
    <div className="page resume">
      <PageTitle text="resume" />

      <div className="page__body">
        <Summary />
        <Contacts />
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  );
}
