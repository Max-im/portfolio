import React, { Component } from "react";
import ExpItemControl from "./ExpItemControl";

export default class Experience extends Component {
  render() {
    const { exp, isadmin } = this.props;
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
              <p>
                <span className="exp__from">{exp.exp_from}</span> -{" "}
                <span className="exp__to">
                  {exp.exp_is_current ? "Now" : exp.exp_to}
                </span>
              </p>
            </div>

            {isadmin && <ExpItemControl id={exp.id} />}
          </div>
        </div>
      </li>
    );
  }
}
