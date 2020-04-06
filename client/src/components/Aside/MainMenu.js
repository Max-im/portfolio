import React from "react";
import { NavLink } from "react-router-dom";

export default function MainMenu({ toggleSubMenu, showSubMenu }) {
  return (
    <nav className="nav mainMenu">
      <ul className="mainMenu__list">
        <li className="mainMenu__item">
          <i
            className={
              showSubMenu
                ? "fas fa-bars mainMenu__link mainMenu__toggleSubmenu mainMenu__toggleSubmenu_active"
                : "fas fa-bars mainMenu__link mainMenu__toggleSubmenu"
            }
            onClick={toggleSubMenu}
          />
        </li>
        <li className="mainMenu__item">
          <NavLink
            exact
            className="fas fa-home mainMenu__link"
            activeClassName="mainMenu__link_active"
            to="/"
          >
            <p className="mainMenu__tooltip">home</p>
          </NavLink>
        </li>
        <li className="mainMenu__item">
          <NavLink
            className="fas fa-user-alt mainMenu__link"
            activeClassName="mainMenu__link_active"
            to="/resume"
          >
            <p className="mainMenu__tooltip">resume</p>
          </NavLink>
        </li>
        <li className="mainMenu__item">
          <NavLink
            className="fas fa-palette mainMenu__link"
            activeClassName="mainMenu__link_active"
            to="/portfolio"
          >
            <p className="mainMenu__tooltip">portfolio</p>
          </NavLink>
        </li>
        {/* <li className="mainMenu__item">
          <NavLink
            className="fas fa-shield-alt mainMenu__link"
            activeClassName="mainMenu__link_active"
            to="/admin"
          >
            <p className="mainMenu__tooltip">admin</p>
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}
