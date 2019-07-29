import React from "react";
import "./style.scss";
import CntactControl from "../../Control/ContactControl";

export default function index({ contact, isadmin }) {
  const isDev = process.env.NODE_ENV === "development";
  const root = isDev ? "http://localhost:5000/" : "";
  let img_src = contact.contact_picture;
  if (!contact.contact_picture.match("^http")) {
    img_src = `${root}uploads/${contact.contact_picture}`;
  }

  return (
    <li className="contact">
      <img className="contact__img" src={img_src} alt={contact.contact_title} />

      {contact.contact_type === "text" ? (
        <p className="contact__content">{contact.contact_value}</p>
      ) : (
        <a
          target="_blank"
          className="contact__content"
          rel="noopener noreferrer"
          href={contact.contact_value}
        >
          {contact.contact_title}
        </a>
      )}
      {isadmin && <CntactControl id={contact.id} />}
    </li>
  );
}
