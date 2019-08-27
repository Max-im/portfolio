import React, { Component } from "react";
import Social from "../../Common/Social/Social";
import "./style.scss";

export default class Home extends Component {
  state = { loaded: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 0);
  }

  render() {
    const { loaded } = this.state;
    return (
      <div className="page home">
        <div className="home__left">
          <div className="home__bottom" />
          <p className={loaded ? "home__name home__name_active" : "home__name"}>
            Maxim
          </p>
          <p
            className={
              loaded ? "home__surname home__surname_active" : "home__surname"
            }
          >
            Pozhidayev
          </p>
          <p
            className={
              loaded ? "home__title home__title_active" : "home__title"
            }
          >
            JavaScript Developer
          </p>
          <div className="home__social">
            <Social />
          </div>
        </div>
        <div className="home__right">
          <div className="home__top" />
        </div>
      </div>
    );
  }
}
