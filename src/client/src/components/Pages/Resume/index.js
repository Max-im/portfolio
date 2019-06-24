import React from "react";
import "./style.scss";
import Contacts from "../../Sections/Contacts";
import Skills from "../../Sections/Skills";
import Experience from "../../Sections/Experience";
import Summary from "../../Sections/Summary";
import Education from "../../Sections/Education";

export default function index() {
  return (
    <div className="page container">
      <h1 className="page__title">resume</h1>

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
    </div>
  );
}
