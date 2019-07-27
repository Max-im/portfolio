import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.scss";
import { getProject } from "../../../store/actions/projectes";
import FormatedDate from "../../Common/FormatedDate";

export class index extends Component {
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
              src={project.picture}
              alt={project.title}
              className="aboutSingleProject__img"
            />
            <p>{project.description}</p>
            <ul>
              {project.skills.map(skill => (
                <li key={skill.id}>
                  <img
                    src={skill.picture}
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
)(withRouter(index));
