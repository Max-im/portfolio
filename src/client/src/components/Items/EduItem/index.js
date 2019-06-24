import React from "react";
import "./style.scss";

export default function index({ eduItem }) {
  return (
    <li className="edu">
      <img
        src={eduItem.edu_photo}
        alt={eduItem.edu_title}
        className="edu__img"
      />
      <div>
        <p className="edu__title">{eduItem.edu_title}</p>
        <p className="edu__desc">{eduItem.edu_description}</p>
      </div>
    </li>
  );
}
