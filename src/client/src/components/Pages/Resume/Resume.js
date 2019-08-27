import React from "react";
import PageTitle from "../../Common/PageTitle";
import About from "../../Sections/About/About";
import Skills from "../../Sections/Skills/Skills";
import Experience from "../../Sections/Experience/Experience";
import Education from "../../Sections/Education/Education";
import "./style.scss";

export default function Resume() {
  return (
    <div className="page resume">
      <PageTitle text="resume" subtext="Information about me" />

      <div className="page__body">
        <About />
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  );
}
