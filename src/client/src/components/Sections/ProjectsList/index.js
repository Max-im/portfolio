import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import ProjectItem from "../../Items/ProjectItem";
import { getProjects, getMoreProjects } from "../../../store/actions/projectes";
import Spinner from "../../Common/Spinner";

export class ProjectsList extends Component {
  componentDidMount() {
    this.props.getProjects();
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const fromBottomPx =
      document.documentElement.scrollHeight -
      window.pageYOffset -
      window.innerHeight;

    if (this.props.portfolio.shownProjects && fromBottomPx < 10) {
      this.props.getMoreProjects();
    }
  }

  static propTypes = {
    portfolio: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired,
    getMoreProjects: PropTypes.func.isRequired
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
  { getProjects, getMoreProjects }
)(ProjectsList);
