import React from "react";
import PageTitle from "../Common/PageTitle";
import About from "../Sections/About/About";
import Skills from "../Sections/Skills/Skills";
import Experience from "../Sections/Experience/Experience";
import Education from "../Sections/Education/Education";
import Breadcrumbs from "../Sections/Breadcrumbs/Breadcrumbs";
import "../../sass/resume.scss";

export default function Resume() {
  const breadcrumbs = ["home", "resume"];
  return (
    <div className="page resume">
      <div className="container">
        <PageTitle text="resume" subtext="Information about me" />
        <Breadcrumbs arr={breadcrumbs} />
        <About />
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  );
}
