import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProject } from "../../../store/actions/projectes";
import FormatedDate from "../../Common/FormatedDate";
import defaultPic from "../../../assets/project-default.jpg";
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
    return (
      <section className="section">
        <h1 className="section__title">
          {isReady ? project.title : "Project"}
        </h1>

        {!isReady ? (
          "Loading..."
        ) : (
          <div>
            <img
              src={project.custom_picture ? project.picture : defaultPic}
              alt={project.title}
              className="aboutSingleProject__img"
            />
            <p>{project.description}</p>
            <ul>
              {project.skills.map(skill => (
                <li key={skill.id}>
                  <img
                    src={`/photo/${skill.picture}`}
                    alt={skill.title}
                    className="aboutSingleProject__skill"
                  />
                </li>
              ))}
            </ul>
            <FormatedDate
              date={project.date}
              clasName="aboutSingleProject__date"
            />
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
