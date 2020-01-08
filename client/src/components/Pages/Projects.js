import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageTitle from '../Common/PageTitle';
import Breadcrumbs from '../Sections/Breadcrumbs/Breadcrumbs';
import ProjectsList from '../Sections/Projects/ProjectsList';
import ProjectsPagination from '../Sections/Projects/ProjectsPagination';
import PortfolioSort from '../Sections/Projects/PortfolioSort';
import PortfolioFilter from '../Sections/Projects/PortfolioFilter';
import ProjectsAside from '../Sections/Projects/ProjectsAside';
import { getProjectsData } from '../../store/actions/projects';
import '../../sass/projects.scss';

export class Projects extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    portfolio: PropTypes.object.isRequired,
    getProjectsData: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getProjectsData();
  }

  componentDidUpdate(prev) {
    console.log(prev)
  }

  render() {
    const breadcrumbs = ['home', 'portfolio'];
    const { projectsNum, projects } = this.props.portfolio;
    let subtext;
    if (!projectsNum) subtext = 'Projects not found';
    else if (projectsNum === 1) subtext = 'Found - 1 project';
    else if (projectsNum > 1) subtext = `Found - ${projectsNum} projects`;

    return (
      <div className="page portfolio">
        <div className="container portfolio__container">
          <PageTitle text="Portfolio" subtext={subtext} />
          <Breadcrumbs arr={breadcrumbs} />

          <div className="portfolio__content">
            <ProjectsAside />
            {/* <div className="portfolio__filter"> */}
              {/* <PortfolioFilter /> */}
              {/* <PortfolioSort /> */}
            {/* </div> */}
            <ProjectsList projects={projects} />
          </div>
            {/* <ProjectsPagination /> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio,
  auth: state.auth
});

export default connect(mapStateToProps, { getProjectsData })(Projects);
