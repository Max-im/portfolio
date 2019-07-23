import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProjectItem from "../../Items/ProjectItem";
import Spinner from "../../Common/Spinner";
import { getProjects } from "../../../store/actions/projectes";

export class ProjectsList extends Component {
  componentDidMount() {
    this.onGetProjects();
  }

  componentDidUpdate(prev) {
    if (prev.match.params.page !== this.props.match.params.page) {
      this.onGetProjects();
    }
  }

  onGetProjects() {
    const page = this.props.match.params.page || 1;
    this.props.getProjects(page, this.props.history);
  }

  static propTypes = {
    portfolio: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired
  };

  render() {
    const { shownProjects, loading, error, projectsNum } = this.props.portfolio;

    return (
      <section className="projectsList">
        <h3 className="projectsList__title">Projects list</h3>

        <div className="projectsList__body">
          {projectsNum === 0 && <p>Projects not found</p>}
          {projectsNum === 1 && <p>Found - 1 project</p>}
          {projectsNum > 1 && <p>Found - {projectsNum} projects</p>}

          {shownProjects &&
            shownProjects.map(item => (
              <ProjectItem item={item} key={item.id} />
            ))}

          {error && <p className="error">{error}</p>}
          {loading && <Spinner />}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  { getProjects }
)(withRouter(ProjectsList));
