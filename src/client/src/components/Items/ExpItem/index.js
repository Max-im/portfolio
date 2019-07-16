import React, { Component } from "react";
import "./style.scss";
import ExpControl from "../../Control/ExpControl";

export default class index extends Component {
  state = { isShown: false };

  render() {
    const { exp, isadmin } = this.props;
    const { isShown } = this.state;
    return (
      <li className="exp">
        <img src={exp.exp_image} alt={exp.exp_company} className="exp__img" />

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
            <i
              className={
                isShown
                  ? "fas fa-chevron-circle-up"
                  : "fas fa-chevron-circle-down"
              }
              onClick={() => this.setState({ isShown: !isShown })}
            />
          </div>

          {isShown && (
            <ul className="exp__description">
              {exp.exp_description.split(";").map((item, i) => (
                <li className="exp__descItem" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {isadmin && <ExpControl id={exp.id} />}
        </div>
      </li>
    );
  }
}
