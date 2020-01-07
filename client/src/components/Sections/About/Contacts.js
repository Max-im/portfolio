import React from "react";

export default function Contacts({ contacts }) {
  return (
    <>
      {contacts.length > 0 && (
        <ul className="about__contacts">
          {contacts.map(item => (
            <li className="about__contact" key={item.id}>
              <i className={item.classes + " about__icon"}></i>
              <p className="about__contactValue">{item.value}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
