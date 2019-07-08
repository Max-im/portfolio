import React from "react";
import "./style.scss";

export default function index({ contact, isadmin }) {
  return (
    <li className="contact">
      <img
        className="contact__img"
        src={contact.contact_picture}
        alt={contact.contact_title}
      />

      {contact.contact_type === "text" ? (
        <p>{contact.contact_value}</p>
      ) : (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={contact.contact_value}
        >
          {contact.contact_title}
        </a>
      )}

      {isadmin && <i className="fas fa-trash-alt contact__delete" />}
    </li>
  );
}
