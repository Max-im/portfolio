import React from "react";
import PageTitle from "../../Common/PageTitle";
import About from "../../Sections/About/About";
import Skills from "../../Sections/Skills/Skills";
import Experience from "../../Sections/Experience/Experience";
import Education from "../../Sections/Education/Education";
import Breadcrumbs from "../../Sections/Breadcrumbs/Breadcrumbs";
import "./style.scss";

export default function Resume() {
  const breadcrumbs = [{ href: "/", title: "Home" }, { title: "Resume" }];
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
