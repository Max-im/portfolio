import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export class MainMenu extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <nav className='nav mainMenu'>
        <ul className='mainMenu__list'>
          {/* <li className="mainMenu__item">
            <i
              className={
                this.props.showSubMenu
                  ? 'fas fa-bars mainMenu__link mainMenu__toggleSubmenu mainMenu__toggleSubmenu_active'
                  : 'fas fa-bars mainMenu__link mainMenu__toggleSubmenu'
              }
              onClick={this.props.toggleSubMenu}
            />
          </li> */}
          <li className='mainMenu__item'>
            <NavLink
              exact
              className='fas fa-home mainMenu__link'
              activeClassName='mainMenu__link_active'
              to='/'
            >
              <p className='mainMenu__tooltip'>home</p>
            </NavLink>
          </li>
          <li className='mainMenu__item'>
            <NavLink
              className='fas fa-user-alt mainMenu__link'
              activeClassName='mainMenu__link_active'
              to='/resume'
            >
              <p className='mainMenu__tooltip'>resume</p>
            </NavLink>
          </li>
          <li className='mainMenu__item'>
            <NavLink
              className='fas fa-palette mainMenu__link'
              activeClassName='mainMenu__link_active'
              to='/portfolio'
            >
              <p className='mainMenu__tooltip'>portfolio</p>
            </NavLink>
          </li>
          {user && user.isadmin && (
            <li className='mainMenu__item'>
              <NavLink
                className='fas fa-shield-alt mainMenu__link'
                activeClassName='mainMenu__link_active'
                to='/admin'
              >
                <p className='mainMenu__tooltip'>admin</p>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(MainMenu);
