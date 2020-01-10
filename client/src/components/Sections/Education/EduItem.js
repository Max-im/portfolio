import React from "react";

export default function index({ edu }) {
  return (
    <li className="edu__item">
      <div className="edu__card">
        <img src={`/photo/${edu.icon}`} alt={edu.title} className="edu__img" />
        <div className="edu__content">
          <p className="edu__title">{edu.title}</p>
          <p className="edu__desc">{edu.description}</p>
        </div>
      </div>
    </li>
  );
}
