import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProjectItem from "./ProjectItem";
import Spinner from "../../Common/Spinner";
import { getProjects } from "../../../store/actions/projectes";
import "./style.scss";

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
    getProjects: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  render() {
    const { projects, loading, error } = this.props.portfolio;

    return (
      <section className="projects">
        {projects && (
          <ul className="projects__list">
            {projects.map(item => (
              <ProjectItem item={item} key={item.id} />
            ))}
          </ul>
        )}

        {error && <p className="error">{error}</p>}
        {loading && <Spinner />}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProjects }
)(withRouter(ProjectsList));
