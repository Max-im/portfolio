import React, { Component } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProjects } from "../../../store/actions/projectes";

export class index extends Component {
  state = { sortBy: "level_id" };

  static propTypes = {
    getProjects: PropTypes.func.isRequired
  };

  onChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
    const { pathname, search } = this.props.history.location;
    const { quality } = queryString.parse(search);

    // without quality
    if (!quality) {
      this.props.history.push({ pathname, search: `?sort=${value}` });
    }
    // with quality
    else {
      this.props.history.push({
        pathname,
        search: `?quality=${quality}&sort=${value}`
      });
    }

    const page = this.props.match.params.page || 1;
    this.props.getProjects(page, this.props.history);
  }

  render() {
    return (
      <div className="projectsSort">
        <h5 className="projectsSort__title">Sort by</h5>
        <div className="projectsSort__list">
          <label
            className={
              this.state.sortBy === "level_id"
                ? "projectsSort__label projectsSort__label_active"
                : "projectsSort__label"
            }
          >
            <input
              name="sortBy"
              type="radio"
              className="hide"
              value="level_id"
              onChange={this.onChange.bind(this)}
              checked={this.state.sortBy === "level_id"}
            />
            by level
          </label>

          <label
            className={
              this.state.sortBy === "date"
                ? "projectsSort__label projectsSort__label_active"
                : "projectsSort__label"
            }
          >
            <input
              name="sortBy"
              className="hide"
              type="radio"
              value="date"
              onChange={this.onChange.bind(this)}
              checked={this.state.sortBy === "date"}
            />
            by date
          </label>

          <label
            className={
              this.state.sortBy === "title"
                ? "projectsSort__label projectsSort__label_active"
                : "projectsSort__label"
            }
          >
            <input
              name="sortBy"
              type="radio"
              className="hide"
              value="title"
              onChange={this.onChange.bind(this)}
              checked={this.state.sortBy === "title"}
            />
            by name
          </label>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getProjects }
)(withRouter(index));
