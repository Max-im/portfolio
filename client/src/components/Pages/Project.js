import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PageTitle from "../Common/PageTitle";
import Breadcrumbs from "../Sections/Breadcrumbs/Breadcrumbs";
import PageAside from "../hoc/PageAside";
import ProjectAside from "../Sections/SingleProject/ProjectAside";
import ProjectInfo from "../Sections/SingleProject/ProjectInfo";
import Spinner from "../Common/Spinner";
import { getProject } from "../../store/actions/projects";
import "../../sass/project.scss";

export class SingleProject extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id);
  }

  static propTypes = {
    project: PropTypes.object.isRequired,
    getProject: PropTypes.func.isRequired
  };

  render() {
    const { project, isReady, error } = this.props.project;
    const show = isReady && !error;
    return (
      <div className="page">
        <div className="container project">
          <PageTitle text="Project" subtext="Single project information" />
          <Breadcrumbs arr={["home", "portfolio", "project"]} />
          {show && (
            <div className="page__content">
              <PageAside component={ProjectAside} project={project} title="Related" />
              <ProjectInfo project={project} />
            </div>
          )}
          {!show && <Spinner />}
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, { getProject })(SingleProject);
