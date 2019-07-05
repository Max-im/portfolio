import React, { Component } from "react";
import "./style.scss";

export default class index extends Component {
  state = { isShow: false };

  render() {
    const { expItem } = this.props;
    const { isShow } = this.state;
    return (
      <li className="exp">
        <img
          src={expItem.exp_image}
          alt={expItem.exp_company}
          className="exp__img"
        />
        <div className="exp__body">
          <p className="exp__title">{expItem.exp_title}</p>
          <p className="exp__company">{expItem.exp_company}</p>
          <div className="exp__date">
            <p>
              <span className="exp__from">{expItem.exp_from}</span> -{" "}
              <span className="exp__to">
                {expItem.exp_is_current ? "Now" : expItem.exp_to}
              </span>
            </p>
            <i
              className={
                isShow
                  ? "fas fa-chevron-circle-up"
                  : "fas fa-chevron-circle-down"
              }
              onClick={() => this.setState({ isShow: !isShow })}
            />
          </div>

          {isShow && (
            <ul className="exp__description">
              {expItem.exp_description.split(";").map((item, i) => (
                <li className="exp__descItem" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          )}
          {this.props.isadmin && (
            <i
              className="fas fa-trash-alt exp__delete"
              onClick={this.props.onDeleteExp.bind(null, expItem.id)}
            />
          )}
        </div>
      </li>
    );
  }
}
