import React from "react";
import CntactControl from "./ContactControl";

export default function index({ contact, isadmin }) {
  return (
    <li className="contact">
      <img
        className="contact__img"
        src={`/photo/${contact.contact_picture}`}
        alt={contact.contact_title}
      />
      {contact.contact_value.match(/^http/) && (
        <a
          target="_blank"
          className="contact__content"
          rel="noopener noreferrer"
          href={contact.contact_value}
        >
          {contact.contact_title}
        </a>
      )}

      {!contact.contact_value.match(/^http/) && (
        <p className="contact__content">{contact.contact_value}</p>
      )}

      {isadmin && <CntactControl id={contact.id} />}
    </li>
  );
}
