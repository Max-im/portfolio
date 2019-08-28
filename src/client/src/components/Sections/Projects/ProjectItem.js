import React from "react";
import { Link } from "react-router-dom";
import SkillsList from "./SkillsList";
import defaultPic from "../../../assets/project-default.jpg";

export default function ProjectItem({ item }) {
  let imgUrl = defaultPic;
  if (item.custom_picture) imgUrl = `/photo/${item.picture}`;

  return (
    <li className="projectItem">
      <div className="projectItem__content">
        <div className="projectItem__imgWrap">
          <img src={imgUrl} alt={item.title} className="projectItem__img" />
          <Link
            to={"/portfolio/project/" + item.id}
            className="projectItem__overlay"
          >
            <i className="fas fa-search projectItem__link" />
          </Link>
        </div>
      </div>
    </li>
  );
}
