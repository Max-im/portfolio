import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { onLogin, onLoginError } from "../../store/actions/auth";

export class AuthMenu extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired,
    onLoginError: PropTypes.func.isRequired
  };

  render() {
    const { isAuth, error } = this.props.auth;
    return (
      <div className="authMenu">
        {!isAuth && (
          <div className="authMenu__login">
            <GoogleLogin
              clientId={process.env.REACT_APP_CLIENT_ID}
              buttonText=""
              className="authMenu__loginBtn"
              onSuccess={this.props.onLogin}
              onFailure={this.props.onLoginError}
              cookiePolicy={"single_host_origin"}
            />
            {error && <p className="error authMenu__error">{error}</p>}
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
  { onLogin, onLoginError }
)(AuthMenu);
