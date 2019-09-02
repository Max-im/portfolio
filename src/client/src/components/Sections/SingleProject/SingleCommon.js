import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProject } from "../../../store/actions/projectes";
import defaultPic from "../../../assets/project-default.jpg";
import Spinner from "../../Common/Spinner";
import SkillsList from "./SkillsList";
import "./style.scss";

export class CommonData extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id);
  }

  static propTypes = {
    project: PropTypes.object.isRequired,
    getProject: PropTypes.func.isRequired
  };

  render() {
    const { project, loading, error } = this.props.project;
    const isReady = project && !loading;
    console.log(project);
    return (
      <section className="section">
        <h1 className="section__title">
          {isReady ? project.title : "Project"}
        </h1>

        {!isReady && <Spinner />}

        {isReady && (
          <div>
            <img
              src={project.custom_picture ? project.picture : defaultPic}
              alt={project.title}
              className="aboutSingleProject__img"
            />
            <p>{project.description}</p>
            <SkillsList item={project} />

            <p>{new Date(project.date).toDateString()}</p>
          </div>
        )}

        {error && <p className="error">{error}</p>}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project
});

export default connect(
  mapStateToProps,
  { getProject }
)(withRouter(CommonData));
