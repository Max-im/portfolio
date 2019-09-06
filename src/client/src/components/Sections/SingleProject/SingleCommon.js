import React from "react";
import "./style.scss";

export default function SingleCommon({ project }) {
  return (
    <section className="section aboutProject">
      <div className="aboutProject__content">
        <div className="aboutProject__item">
          <p className="aboutProject__contentKey">
            <span className="aboutProject__subtitle">Title</span>
          </p>
          <p className="aboutProject__contentValue"> {project.title}</p>
        </div>
        <div className="aboutProject__item">
          <p className="aboutProject__contentKey">
            <span className="aboutProject__subtitle">Description</span>
          </p>
          <p className="aboutProject__contentValue">{project.description}</p>
        </div>
        <div className="aboutProject__item">
          <p className="aboutProject__contentKey">
            <span className="aboutProject__subtitle">Start date</span>
          </p>
          <p className="aboutProject__contentValue">
            {new Date(project.date).toDateString()}
          </p>
        </div>
        <div className="aboutProject__item">
          <p className="aboutProject__contentKey">
            <span className="aboutProject__subtitle">Level</span>
          </p>
          <p className="aboutProject__contentValue">{project.level}</p>
        </div>

        {project.github && (
          <div className="aboutProject__item">
            <p className="aboutProject__contentKey">
              <span className="aboutProject__subtitle">GitHub</span>
            </p>
            <p className="aboutProject__contentValue">{project.github}</p>
          </div>
        )}
        {project.github && (
          <div className="aboutProject__item">
            <p className="aboutProject__contentKey">
              <span className="aboutProject__subtitle">Deploy</span>
            </p>
            <p className="aboutProject__contentValue">{project.deploy}</p>
          </div>
        )}
      </div>
    </section>
  );
}
