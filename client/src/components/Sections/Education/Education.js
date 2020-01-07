import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEducation } from "../../../store/actions/resume";
import EduItem from "./EduItem";
import Spinner from "../../Common/Spinner";
import "../../../sass/education.scss";

export class index extends Component {
  componentDidMount() {
    this.props.getEducation();
  }

  static propTypes = {
    education: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getEducation: PropTypes.func.isRequired
  };

  render() {
    const { list, loading, error } = this.props.education;

    return (
      <section className="section edu">
        <div className="container">
          <h3 className="section__title">Education</h3>

          <ul className="edu__list">
            {list && list.map(edu => <EduItem key={edu.id} edu={edu} />)}
          </ul>

          {error && <p className="error">{error}</p>}
          {loading && <Spinner />}
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
