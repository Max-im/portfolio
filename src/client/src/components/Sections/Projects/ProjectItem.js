import React from "react";
import { Link } from "react-router-dom";
import FormatedDate from "../../Common/FormatedDate";
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
        </div>

        <div className="projectItem__body">
          <h5 className="projectItem__title">{item.title}</h5>
          <FormatedDate date={item.date} clasName="projectItem__date" />
          <p className="projectItem__description">{item.description}</p>
          <p className={"projectItem__level projectItem__level_" + item.level}>
            {item.level}
          </p>
          {(item.github || item.deploy) && (
            <div className="projectItem__medias">
              {item.github && (
                <a
                  className="fab fa-github-square projectItem__media"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.github}
                >
                  ""
                </a>
              )}
              {item.deploy && (
                <a
                  className="fas fa-eye projectItem__media"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.deploy}
                >
                  ""
                </a>
              )}
            </div>
          )}
          <SkillsList item={item} />

          <Link
            className="projectItem__btn"
            to={"/portfolio/project/" + item.id}
          >
            Show
          </Link>
        </div>
      </div>
    </li>
  );
}
