import React from "react";
import EduControl from "./EduControl";

export default function index({ edu, isadmin }) {
  return (
    <li className="edu__item">
      <div className="edu__inner">
        <img src={`/photo/${edu.icon}`} alt={edu.title} className="edu__img" />
        <div>
          <p className="edu__title">{edu.title}</p>
          <p className="edu__desc">{edu.description}</p>
        </div>

        {isadmin && <EduControl id={edu.id} />}
      </div>
    </li>
  );
}
