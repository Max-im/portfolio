import DescribeBlock from "./DescribeBlock";
import AboutPhoto from "./AboutPhoto";
import Contacts from "./Contacts";
import Social from "../../Common/Social/Social";
import "./style.scss";

import React from "react";

export default function About() {
  return (
    <section className="section about">
      <div className="container">
        <h3 className="section__title">About</h3>
        <div className="about__body">
          <div className="about__photoBlock">
            <AboutPhoto />
            <Contacts />
            <Social />
          </div>
          <DescribeBlock />
        </div>
      </div>
    </section>
  );
}
