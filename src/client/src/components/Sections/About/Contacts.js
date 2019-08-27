import React from "react";

export default function Contacts() {
  return (
    <ul className="about__contacts">
      <li className="about__contact">
        <i className="fas fa-phone-square about__contactIcon" />
        <p className="about__contactValue">+38 (050) 772-31-69</p>
      </li>
      <li className="about__contact">
        <i className="fas fa-envelope about__contactIcon"></i>
        <p className="about__contactValue">pogidaevmo@gmail.com</p>
      </li>
      <li className="about__contact">
        <i className="fab fa-skype about__contactIcon"></i>
        <p className="about__contactValue">pogidaev_mo</p>
      </li>
    </ul>
  );
}
