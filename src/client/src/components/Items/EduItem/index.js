import React from "react";
import "./style.scss";
import EduControl from "../../Control/EduControl";

export default function index({ edu, isadmin }) {
  return (
    <li className="edu">
      <img src={edu.edu_photo} alt={edu.edu_title} className="edu__img" />
      <div>
        <p className="edu__title">{edu.edu_title}</p>
        <p className="edu__desc">{edu.edu_description}</p>
      </div>

      {isadmin && <EduControl id={edu.id} />}
    </li>
  );
}
