import React, { Component } from 'react';
import { connect } from 'react-redux';

export class AddProject extends Component {
  state = {
    shown: false,
  };

  render() {
    const { user } = this.props.auth;
    return (
      <>
        {user && user.isadmin && (
          <div className="container">
            <div>add</div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(AddProject);
