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
      <div className='authMenu'>
        {!isAuth && (
          <div className='authMenu__login'>
            <GoogleLogin
              clientId={process.env.REACT_APP_CLIENT_ID}
              buttonText=''
              className='authMenu__loginBtn'
              onSuccess={this.props.onLogin}
              onFailure={this.props.onLoginError}
              cookiePolicy={'single_host_origin'}
            />
            {error && <p className='error authMenu__error'>{error}</p>}
          </div>
        )}
        {isAuth && (
          <i className='fas fa-sign-out-alt userMenu__logout ' onClick={this.onLogout.bind(this)}>
            <p className='userMenu__logoutTooltip'>Logout</p>
          </i>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { onLogin, onLogout, onLoginError })(AuthMenu);
