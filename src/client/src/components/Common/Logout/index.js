import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { onLogout } from "../../../store/actions/auth";

export class index extends Component {
  componentDidMount() {
    console.log(this.porps.match);
    this.props.onLogout();
    this.props.history.push("/");
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    onLogout: PropTypes.func.isRequired
  };

  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { onLogout }
)(withRouter(index));
