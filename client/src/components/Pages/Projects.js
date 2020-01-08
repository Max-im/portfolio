import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import PageTitle from "../Common/PageTitle";
import Breadcrumbs from "../Sections/Breadcrumbs/Breadcrumbs";
import ProjectsList from "../Sections/Projects/ProjectsList";
import ProjectsAside from "../Sections/Projects/ProjectsAside";
import ProjectsPagination from "../Sections/Projects/ProjectsPagination";
import Spinner from "../Common/Spinner";
import { getProjectsData } from "../../store/actions/projects";
import "../../sass/projects.scss";

export class Projects extends Component {
  static propTypes = {
    portfolio: PropTypes.object.isRequired,
    getProjectsData: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    this.onRequest();
  };

  componentDidUpdate = prev => {
    const { search } = this.props.location;
    const { page } = this.props.match.params;
    if (search !== prev.location.search || page !== prev.match.params.page) {
      this.onRequest();
    }
  };

  onRequest = () => {
    const { search } = this.props.location;
    const page = this.props.match.params.page - 0 || 1;
    this.props.getProjectsData(search, page);
  };

  render() {
    const breadcrumbs = ["home", "portfolio"];
    const { projectsNum, projects, isReady, error } = this.props.portfolio;
    let subtext;
    if (!projectsNum) subtext = "Projects not found";
    else if (projectsNum === 1) subtext = "Found - 1 project";
    else if (projectsNum > 1) subtext = `Found - ${projectsNum} projects`;

    return (
      <div className="page portfolio">
        <div className="container portfolio__container">
          <PageTitle text="Portfolio" subtext={subtext} />
          <Breadcrumbs arr={breadcrumbs} />

          {isReady && (
            <>
              <div className="portfolio__content">
                <ProjectsAside />
                <ProjectsList projects={projects} />
              </div>
              <ProjectsPagination projectsNum={projectsNum} />
            </>
          )}
          {!(isReady || error) && <Spinner />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio,
  auth: state.auth
});

export default connect(mapStateToProps, { getProjectsData })(
  withRouter(Projects)
);
