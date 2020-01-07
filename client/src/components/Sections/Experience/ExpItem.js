import React, { Component } from "react";
import ExpItemControl from "./ExpItemControl";

export default class Experience extends Component {
  render() {
    const { exp, isadmin } = this.props;
    // const timeOpt = { month: "short", year: "numeric" };
    const dateFrom = new Date(exp.from);
    const dateTo = exp.isCurrent ? new Date() : new Date(exp.to);
    const expTime = Math.abs(dateTo - dateFrom);
    const expDays = Math.ceil(expTime / (1000 * 60 * 60 * 24));
    const expYears = expDays > 365 ? Math.floor(expDays / 365) : null;
    const expMonth = Math.round((expDays % 365) / 30);

    return (
      <li className="exp__item">
        <div className="exp__itemInner">
          <img
            src={`/photo/${exp.icon}`}
            alt={exp.company}
            className="exp__img"
          />

          <div className="exp__body">
            <p className="exp__title">{exp.title}</p>
            <p className="exp__company">{exp.company}</p>

            <div className="exp__date">
              {expYears && (
                <span className="exp__year">
                  {expYears} {expYears === 1 ? "Year" : "Years"}
                </span>
              )}
              {expMonth} Month
            </div>
          </div>
        </div>
      </li>
    );
  }
}
