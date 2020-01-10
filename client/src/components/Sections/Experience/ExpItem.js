import React from "react";
import { computeExperiencePeriod } from "../../../helpers/computeExpPeriod";

export default function ExpItem({ exp }) {
  const date = computeExperiencePeriod(exp);
  return (
    <li className="exp__item">
      <div className="exp__card">
        <img
          src={`/photo/${exp.icon}`}
          alt={exp.company}
          className="exp__img"
        />
        <div className="exp__content">
          <p className="exp__title">{exp.title}</p>
          <p className="exp__company">{exp.company}</p>
          <p className="exp__date">{date}</p>
        </div>
      </div>
    </li>
  );
}
