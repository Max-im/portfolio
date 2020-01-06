import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEdu } from "../../../store/actions/education";
import EduItem from "./EduItem";
import AddEdu from "./AddEdu";
import Spinner from "../../Common/Spinner";
import "./style.scss";

export class index extends Component {
  componentDidMount() {
    this.props.getEdu();
  }

  static propTypes = {
    education: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getEdu: PropTypes.func.isRequired
  };

  render() {
    const { edu, loading, error } = this.props.education;
    const { isadmin } = this.props.auth.user;

    return (
      <section className="section edu">
        <div className="container">
          <h3 className="section__title">Education</h3>

          {edu && (
            <ul className="edu__list">
              {edu.map(eduItem => (
                <EduItem key={eduItem.id} edu={eduItem} isadmin={isadmin} />
              ))}
            </ul>
          )}

          {isadmin && <AddEdu />}
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

export default connect(
  mapStateToProps,
  { getEdu }
)(index);
