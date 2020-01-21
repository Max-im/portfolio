import React, { Component } from "react";
import "../../sass/pageTitle.scss";

export default class index extends Component {
  state = { launch: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ launch: true });
    }, 0);
  }

  render() {
    const { text, subtext } = this.props;
    return (
      <div className="pageTitle">
        <div className="container">
          <div className="pageTitle__body">
            <h1 className="pageTitle__text">{text}</h1>
            {subtext && <p className="pageTitle__subtext">{subtext}</p>}
          </div>
        </div>
      </div>
    );
  }
}
