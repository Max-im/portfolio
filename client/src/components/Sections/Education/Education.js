import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EduItem from "./EduItem";
import Spinner from "../../Common/Spinner";
import { getEducation } from "../../../store/actions/resume";
import "../../../sass/education.scss";

export class index extends Component {
  componentDidMount() {
    if (!this.props.education.isReady) {
      this.props.getEducation();
    }
  }

  static propTypes = {
    education: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getEducation: PropTypes.func.isRequired
  };

  render() {
    const { list, isReady, error } = this.props.education;

    return (
      <section className="section edu">
        <div className="container">
          <h3 className="section__title">Education</h3>

          <ul className="edu__list">
            {isReady && list.map(edu => <EduItem key={edu.id} edu={edu} />)}
          </ul>

          {error && <p className="error">{error}</p>}
          {!isReady && <Spinner />}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  education: state.education,
  auth: state.auth
});

export default connect(mapStateToProps, { getEducation })(index);