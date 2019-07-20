import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.scss";
import ProjectItem from "../../Items/ProjectItem";
import { getProjects } from "../../../store/actions/projectes";
import Spinner from "../../Common/Spinner";

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
    this.props.getProjects(page);
  }

  static propTypes = {
    portfolio: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired
  };

  render() {
    const { shownProjects, loading, error } = this.props.portfolio;

    return (
      <section className="projectsList">
        <h3 className="projectsList__title">Projects list</h3>

        <div className="projectsList__body">
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
