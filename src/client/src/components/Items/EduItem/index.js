import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function index({ eduItem, onEduDelete, isadmin }) {
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

      {isadmin && (
        <div className="edu__delete">
          <Link
            className="far fa-edit"
            to={"/admin/update-edu/" + eduItem.id}
          />
          <i
            className="fas fa-trash-alt"
            onClick={onEduDelete.bind(null, eduItem.id)}
          />
        </div>
      )}
    </li>
  );
}
