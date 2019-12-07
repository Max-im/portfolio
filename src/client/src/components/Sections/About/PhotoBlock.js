import React from "react";
import AboutPhoto from "./AboutPhoto";
import Contacts from "./Contacts";
import Social from "../../Common/Social/Social";

export default function PhotoBlock() {
  return (
    <div className="about__photoBlock">
      <AboutPhoto />
      <Contacts />
      <Social />
    </div>
  );
}
