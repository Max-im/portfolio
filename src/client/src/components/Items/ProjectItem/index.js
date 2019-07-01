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
        <Link className="projectItem__btn" to={"/portfolio/project/" + item.id}>
          Show
        </Link>
      </div>
    </div>
  );
}
