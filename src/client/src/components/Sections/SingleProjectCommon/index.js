import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.scss";
import { getProject } from "../../../store/actions/projectes";

export class index extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id);
  }

  static propTypes = {
    portfolio: PropTypes.object.isRequired,
    getProject: PropTypes.func.isRequired
  };

  render() {
    const { project, loading } = this.props.portfolio;
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
            <img src={project.picture} />
            <p>{project.description}</p>
            <ul>
              {project.skills.map(skill => (
                <li key={skill.id}>
                  <img src={skill.picture} alt={skill.title} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  { getProject }
)(withRouter(index));
