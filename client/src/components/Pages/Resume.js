import React from "react";
import PageTitle from "../Common/PageTitle";
import Breadcrumbs from "../Sections/Breadcrumbs/Breadcrumbs";
import About from "../Sections/About/About";
import Skills from "../Sections/Skills/Skills";
import Experience from "../Sections/Experience/Experience";
import Education from "../Sections/Education/Education";
import "../../sass/resume.scss";

export default function Resume() {
  return (
    <div className="page resume">
      <PageTitle text="resume" subtext="Information about me" />
      <Breadcrumbs arr={["home", "resume"]} />
      <About />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}
