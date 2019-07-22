import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProjectItem from "../../Items/ProjectItem";
import Spinner from "../../Common/Spinner";
import { getProjects } from "../../../store/actions/projectes";

const assambleQuery = ({ quality }) => {
  if (quality.length === 0) return "";
  else return `?quality=${quality.join(",")}`;
};

export class ProjectsList extends Component {
  componentDidMount() {
    this.onGetProjects();
  }

  componentDidUpdate(prev) {
    if (prev.match.params.page !== this.props.match.params.page) {
      this.onGetProjects();
    }

    if (
      prev.portfolio.query.quality.length !==
      this.props.portfolio.query.quality.length
    ) {
      this.onGetProjects();
    }
  }

  onGetProjects() {
    const page = this.props.match.params.page || 1;
    const theQuery = assambleQuery(this.props.portfolio.query);
    this.props.history.push({ pathname: "/portfolio", search: theQuery });
    this.props.getProjects(page, theQuery);
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
