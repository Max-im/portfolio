import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { onLogout } from "../../store/actions/auth";
import defaultUser from "../../assets/defaultUser.png";

export class UserMenu extends Component {
  onLogout() {
    if (!window.confirm("Are you sure you want to logout?")) return;
    this.props.onLogout();
  }

  static propTypes = {
    onLogout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isAuth, user } = this.props.auth;
    return (
      <div className="userMenu">
        <img
          className="userMenu__img"
          src={isAuth ? user.avatar : defaultUser}
          alt="user"
        />

        <p className="userMenu__name">{isAuth ? user.name : "User"}</p>
        {isAuth && (
          <i
            className="fas fa-sign-out-alt userMenu__logout"
            onClick={this.onLogout.bind(this)}
          >
            <p className="userMenu__logoutTooltip">Logout</p>
          </i>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { onLogout }
)(UserMenu);
