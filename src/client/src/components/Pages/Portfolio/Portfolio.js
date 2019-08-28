import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PageTitle from "../../Common/PageTitle";
import ProjectsList from "../../Sections/Projects/ProjectsList";
import ProjectsPagination from "../../Sections/Projects/ProjectsPagination";
import AddProject from "../../Sections/Projects/AddProject";
import PortfolioSort from "../../Sections/Projects/PortfolioSort";
import PortfolioFilter from "../../Sections/Projects/PortfolioFilter";

export class Portfolio extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    portfolio: PropTypes.object.isRequired
  };

  render() {
    const { isadmin } = this.props.auth.user;
    const { projectsNum } = this.props.portfolio;
    let subtext;
    if (!projectsNum) subtext = "Projects not found";
    if (projectsNum === 1) subtext = "Found - 1 project";
    if (projectsNum > 1) subtext = `Found - ${projectsNum} projects`;

    return (
      <div className="page portfolio">
        <PageTitle text="Portfolio" subtext={subtext} />

        <div className="container portfolio__container">
          {/* filter projects */}
          {isadmin && <AddProject />}
          <div className="portfolio__filter">
            <PortfolioFilter />
            <PortfolioSort />
          </div>
          <ProjectsList />
          <ProjectsPagination />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio,
  auth: state.auth
});

export default connect(mapStateToProps)(Portfolio);
