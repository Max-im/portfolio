import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./style.scss";

export class index extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const {
      user: { isadmin },
      isAuth
    } = this.props.auth;

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
            {isAuth && isadmin && (
              <NavLink
                to="/admin"
                className="mainMenu__link"
                activeClassName="mainMenu__link_active"
              >
                <i className="fas fa-user-shield mainMenu__icon" />
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(index);
