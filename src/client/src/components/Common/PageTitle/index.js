import React, { Component } from "react";
import "./style.scss";

export default class index extends Component {
  state = { launch: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ launch: true });
    }, 0);
  }

  render() {
    const { text } = this.props;
    const { launch } = this.state;
    return (
      <div className="pageTitle">
        <div
          className={
            launch
              ? "pageTitle__container pageTitle__container_active"
              : "pageTitle__container"
          }
        />
        <h1
          className={
            launch
              ? "pageTitle__text pageTitle__text_active"
              : "pageTitle__text"
          }
        >
          {text}
        </h1>
      </div>
    );
  }
}
