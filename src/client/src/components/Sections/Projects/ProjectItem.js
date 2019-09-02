import React from "react";
import { Link } from "react-router-dom";
import SkillsList from "./SkillsList";
import defaultPic from "../../../assets/project-default.jpg";

export default function ProjectItem({ item }) {
  let imgUrl = defaultPic;
  if (item.custom_picture) imgUrl = `/photo/${item.picture}`;

  return (
    <li className="projectItem">
      <div className="projectItem__inner">
        <img src={imgUrl} alt={item.title} className="projectItem__img" />
        <p className="projectItem__level">{item.level}</p>
        <Link
          to={"/portfolio/project/" + item.id}
          className="projectItem__overlay"
        >
          <i className="fas fa-search projectItem__link" />
        </Link>
      </div>
      <SkillsList item={item} />
      <p className="projectItem__title">{item.title}</p>
    </li>
  );
}
