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
    const { sortBy } = this.state;
    return (
      <div className="aside__block portfolioSort">
        <h5 className="aside__title">Sort by</h5>
        <div className="portfolioSort__list">
          <label className="portfolioSort__item">
            <input
              name="sortBy"
              type="radio"
              className="hide"
              value="level_id"
              onChange={this.onChange.bind(this)}
              checked={sortBy === "level_id"}
            />
            <p
              className={
                sortBy === "level_id"
                  ? "portfolioSort__btn portfolioSort__btn_active"
                  : "portfolioSort__btn"
              }
            >
              Level
            </p>
          </label>

          <label className="portfolioSort__item">
            <input
              name="sortBy"
              className="hide"
              type="radio"
              value="date"
              onChange={this.onChange.bind(this)}
              checked={sortBy === "date"}
            />
            <p
              className={
                sortBy === "date"
                  ? "portfolioSort__btn portfolioSort__btn_active"
                  : "portfolioSort__btn"
              }
            >
              Date
            </p>
          </label>

          <label className="portfolioSort__item">
            <input
              name="sortBy"
              type="radio"
              className="hide"
              value="title"
              onChange={this.onChange.bind(this)}
              checked={sortBy === "title"}
            />
            <p
              className={
                sortBy === "title"
                  ? "portfolioSort__btn portfolioSort__btn_active"
                  : "portfolioSort__btn"
              }
            >
              Name
            </p>
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
