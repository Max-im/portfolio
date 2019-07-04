import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import FormatedDate from "../../Common/FormatedDate";

export default function index({ item }) {
  return (
    <div className="projectItem">
      <img src={item.picture} alt={item.title} className="projectItem__img" />
      <div className="projectItem__body">
        <h5 className="projectItem__title">{item.title}</h5>
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
              />
            )}
            {item.deploy && (
              <a
                className="fas fa-eye projectItem__media"
                target="_blank"
                rel="noopener noreferrer"
                href={item.deploy}
              />
            )}
          </div>
        )}
        <ul className="projectItem__skills">
          {item.skills
            .filter((j, i) => i < 8)
            .map(skill => (
              <li className="projectItem__skill" key={skill.id}>
                <img
                  src={skill.picture}
                  alt={skill.title}
                  className="projectItem__skillImg"
                />
              </li>
            ))}
        </ul>
        <FormatedDate date={item.date} clasName="projectItem__date" />
        <Link className="projectItem__btn" to={"/portfolio/project/" + item.id}>
          Show
        </Link>
      </div>
    </div>
  );
}
