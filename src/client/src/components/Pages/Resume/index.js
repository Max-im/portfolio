import React from "react";
import "./style.scss";
import Contacts from "../../Sections/Contacts";
import Skills from "../../Sections/Skills";
import Experience from "../../Sections/Experience";

export default function index() {
  return (
    <div className="page container">
      <h1 className="page__title">resume</h1>

      {/* summary */}

      {/* contacts */}
      <Contacts />

      {/* skills */}
      <Skills />

      {/* experience */}
      <Experience />

      {/* education */}
    </div>
  );
}
