import React from "react";
import avatar from "../../../assets/avatar.jpg";

export default function AboutPhoto() {
  return (
    <div className="about__imgWrap">
      <img src={avatar} alt="my photo" className="about__img" />
    </div>
  );
}
