import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import ProjectItem from "../../Items/ProjectItem";
import { getProjects } from "../../../store/actions/projectes";
import Spinner from "../../Common/Spinner";

export class ProjectsList extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  static propTypes = {
    portfolio: PropTypes.object.isRequired
  };

  render() {
    const { projects, loading } = this.props.portfolio;

    return (
      <section className="projectsList">
        <h3 className="projectsList__title">Projects list</h3>

        <div className="projectsList__body">
          {projects &&
            projects.map(item => <ProjectItem item={item} key={item.id} />)}
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
)(ProjectsList);
