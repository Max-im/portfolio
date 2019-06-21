import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export default function index() {
  return (
    <nav className="mainMenu">
      <ul className="mainMenu__list">
        <li className="mainMenu__item">
          <NavLink
            to="/"
            exact
            className="mainMenu__link"
            activeClassName="mainMenu__link_active"
          >
            <i className="fas fa-home mainMenu__icon" />
          </NavLink>
          <NavLink
            to="/resume"
            className="mainMenu__link"
            activeClassName="mainMenu__link_active"
          >
            <i className="fas fa-user-tie mainMenu__icon" />
          </NavLink>
          <NavLink
            to="/portfolio"
            className="mainMenu__link"
            activeClassName="mainMenu__link_active"
          >
            <i className="fas fa-palette mainMenu__icon" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
