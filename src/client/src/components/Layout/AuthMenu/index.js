import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";
import "./style.scss";
import { onLogin, onLoginError, onLogout } from "../../../store/actions/auth";

export class AuthMenu extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired,
    onLoginError: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired
  };

  render() {
    const { user, isAuth } = this.props.auth;
    const { onLogout: logout } = this.props;
    return (
      <div className="authMenu">
        {isAuth ? (
          <div className="authMenu__user">
            <img src={user.avatar} alt={user.name} className="authMenu__ava" />
            <i className="fas fa-sign-out-alt authMenu__out" onClick={logout} />
          </div>
        ) : (
          <div className="authMenu__login">
            <GoogleLogin
              clientId={process.env.REACT_APP_CLIENT_ID}
              buttonText=""
              className="authMenu__loginBtn"
              onSuccess={this.props.onLogin}
              onFailure={this.props.onLoginError}
              cookiePolicy={"single_host_origin"}
            />
          </div>
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
  { onLogin, onLoginError, onLogout }
)(AuthMenu);
