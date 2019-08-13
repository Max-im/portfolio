import React, { Component } from "react";
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
          <ul
            className={
              loaded
                ? "home__contactList home__contactList_active"
                : "home__contactList"
            }
          >
            <li>
              <a
                className="fas fa-envelope home__link"
                href="mailto:pogidaevmo@gmail.com"
              >
                <p className="home__tooltip">send email</p>
              </a>
            </li>
            <li>
              <a
                className="fab fa-facebook-square home__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/max.pozhidaev.7"
              >
                <p className="home__tooltip">Facebook</p>
              </a>
            </li>
            <li>
              <a
                className="fab fa-linkedin home__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/max-im"
              >
                <p className="home__tooltip">Linkedin</p>
              </a>
            </li>
            <li>
              <a
                className="fab fa-git-square home__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/max-im"
              >
                <p className="home__tooltip">github</p>
              </a>
            </li>
            <li>
              <a
                className="fab fa-codepen home__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://codepen.io/max-im"
              >
                <p className="home__tooltip">codepen</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="home__right" />
      </div>
    );
  }
}
