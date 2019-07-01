import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import { getSkills } from "../../../store/actions/skills";

export class index extends Component {
  state = {};

  componentDidMount() {
    this.props.getSkills();
  }

  static propTypes = {
    skills: PropTypes.object.isRequired,
    getSkills: PropTypes.func.isRequired
  };

  render() {
    return <div>skills</div>;
  }
}

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { getSkills }
)(index);
