import React from "react";
import "./style.scss";
import Skills from "../../Sections/Skills";

export default function index() {
  return (
    <div className="page container">
      <h1 className="page__title">resume</h1>

      {/* skills */}
      <Skills />
    </div>
  );
}
