import DescribeBlock from "./DescribeBlock";
import PhotoBlock from "./PhotoBlock";
import "./style.scss";

import React from "react";

export default function About() {
  return (
    <section className="section about">
      <div className="container">
        <h3 className="section__title">About</h3>
        <div className="about__body">
          <PhotoBlock />
          <DescribeBlock />
        </div>
      </div>
    </section>
  );
}
