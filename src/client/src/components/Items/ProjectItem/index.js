import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function index({ item }) {
  return (
    <div className="projectItem">
      <img src={item.picture} alt={item.title} className="projectItem__img" />
      <div className="projectItem__body">
        <h5 className="projectItem__title">{item.title}</h5>
        <p className="projectItem__description">{item.description}</p>
        <Link className="projectItem__btn" to={item.picture}>
          Show
        </Link>
      </div>
    </div>
  );
}
