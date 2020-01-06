import React, { Component } from "react";
import ExpItemControl from "./ExpItemControl";

export default class Experience extends Component {
  render() {
    const { exp, isadmin } = this.props;
    // const timeOpt = { month: "short", year: "numeric" };
    const dateFrom = new Date(exp.exp_from);
    const dateTo = exp.exp_is_current ? new Date() : new Date(exp.exp_to);
    const expTime = Math.abs(dateTo - dateFrom);
    const expDays = Math.ceil(expTime / (1000 * 60 * 60 * 24));
    const expYears = expDays > 365 ? Math.floor(expDays / 365) : null;
    const expMonth = Math.round((expDays % 365) / 30);

    return (
      <li className="exp__item">
        <div className="exp__itemInner">
          <img
            src={`/photo/${exp.exp_image}`}
            alt={exp.exp_company}
            className="exp__img"
          />

          <div className="exp__body">
            <p className="exp__title">{exp.exp_title}</p>
            <p className="exp__company">{exp.exp_company}</p>

            <div className="exp__date">
              {expYears && (
                <span className="exp__year">
                  {expYears} {expYears === 1 ? "Year" : "Years"}
                </span>
              )}
              {expMonth} Month
              {/* <p className="exp__from">
                {new Date(exp.exp_from).toLocaleString("en-US", timeOpt)}
              </p>
              <p className="exp__to">
                {exp.exp_is_current
                  ? "Now"
                  : new Date(exp.exp_to).toLocaleString("en-US", timeOpt)}
              </p> */}
            </div>
            {isadmin && <ExpItemControl id={exp.id} />}
          </div>
        </div>
      </li>
    );
  }
}
