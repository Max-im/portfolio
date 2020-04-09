import React from 'react';
import {downloadCV} from '../../../store/actions/resume'

export default function Contacts({ contacts }) {
  return (
    <>
      {contacts && contacts.length > 0 && (
        <ul className="about__contacts">
          {contacts.map((item) => (
            <li className="about__contact" key={item.id}>
              <i className={item.classes + ' about__icon'}></i>
              <p className="about__contactValue">{item.value}</p>
            </li>
          ))}
          <li className="about__contact about__contact_cv" onClick={downloadCV}>
            <i className="far fa-file-pdf about__icon"></i>
            <p className="about__contactValue">Download CV</p>
          </li>
        </ul>
      )}
    </>
  );
}
