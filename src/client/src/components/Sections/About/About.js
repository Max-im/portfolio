import AboutText from "./AboutText";
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
          <AboutPhoto />

          <div className="about__social">
            <h5 className="about__name">Maksim Pozhydaiev</h5>
            <Contacts />
            <Social />
          </div>
        </div>
        <AboutText />
      </div>
    </section>
  );
}
