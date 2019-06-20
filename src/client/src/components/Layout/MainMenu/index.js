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
            home
          </NavLink>
          <NavLink
            to="/resume"
            className="mainMenu__link"
            activeClassName="mainMenu__link_active"
          >
            resume
          </NavLink>
          <NavLink
            to="/portfolio"
            className="mainMenu__link"
            activeClassName="mainMenu__link_active"
          >
            portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
