import React from "react";
import "./style.scss";

export default function index({ contact }) {
  return (
    <li className="contact">
      {contact.contact_type === "text" ? (
        <>
          <img
            className="contact__img"
            src={contact.contact_picture}
            alt={contact.contact_title}
          />
          <p>{contact.contact_value}</p>
        </>
      ) : (
        <>
          <img
            className="contact__img"
            src={contact.contact_picture}
            alt={contact.contact_title}
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={contact.contact_value}
          >
            {contact.contact_title}
          </a>
        </>
      )}
    </li>
  );
}
