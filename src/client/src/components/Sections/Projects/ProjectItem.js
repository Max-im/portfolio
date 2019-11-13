import React from "react";
import { Link } from "react-router-dom";
import SkillsList from "./SkillsList";
import defaultPic from "../../../assets/project-default.jpg";

export default function ProjectItem({ item }) {
  let imgUrl = defaultPic;
  if (item.custom_picture) imgUrl = `/photo/${item.picture}`;

  return (
    <li className="projectItem">
      <Link to={"/portfolio/project/" + item.id} className="projectItem__link">
        <img src={imgUrl} alt={item.title} className="projectItem__img" />
        <p className="projectItem__level">{item.level}</p>

        <div className="projectItem__meta">
          <p className="projectItem__title">{item.title}</p>
          <div className="projectItem__hovered">
            <SkillsList item={item} />
            <p className="projectItem__date">
              {new Date(item.date).toDateString()}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
