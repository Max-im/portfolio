import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { onLogin, onLogout, onLoginError } from '../../store/actions/auth';

export class AuthMenu extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired,
    onLoginError: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
  };

  onLogout() {
    if (!window.confirm('Are you sure you want to logout?')) return;
    this.props.onLogout();
  }

  render() {
    const { isAuth, error } = this.props.auth;

    return (
      <div className="authMenu">
        <div className="mainMenu__link">
          {!isAuth && (
            <>
              <GoogleLogin
                clientId={process.env.REACT_APP_CLIENT_ID}
                buttonText=""
                className="authMenu__loginBtn"
                onSuccess={this.props.onLogin}
                onFailure={this.props.onLoginError}
                cookiePolicy={'single_host_origin'}
              />
              <p className="mainMenu__tooltip authMenu__tooltip">Login</p>
            </>
          )}
          {isAuth && (
            <>
              <i
                className="fas fa-sign-out-alt authMenu__loginBtn"
                onClick={this.onLogout.bind(this)}
              />
              <p className="mainMenu__tooltip authMenu__tooltip">Logout</p>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { onLogin, onLogout, onLoginError })(AuthMenu);
