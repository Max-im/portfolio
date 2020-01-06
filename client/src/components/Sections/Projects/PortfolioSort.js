import React, { Component } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProjects } from "../../../store/actions/projectes";

export class PortfolioSort extends Component {
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
      <div className="portfolioSort">
        <h5 className="portfolio__title">Sort by</h5>
        <div className="portfolioSort__list">
          <label
            className={
              sortBy === "level_id"
                ? "portfolioSort__item portfolioSort__item_active"
                : "portfolioSort__item"
            }
          >
            <input
              name="sortBy"
              type="radio"
              className="hide"
              value="level_id"
              onChange={this.onChange.bind(this)}
              checked={sortBy === "level_id"}
            />
            Level
          </label>

          <label
            className={
              sortBy === "date"
                ? "portfolioSort__item portfolioSort__item_active"
                : "portfolioSort__item"
            }
          >
            <input
              name="sortBy"
              className="hide"
              type="radio"
              value="date"
              onChange={this.onChange.bind(this)}
              checked={sortBy === "date"}
            />
            Date
          </label>

          <label
            className={
              sortBy === "title"
                ? "portfolioSort__item portfolioSort__item_active"
                : "portfolioSort__item"
            }
          >
            <input
              name="sortBy"
              type="radio"
              className="hide"
              value="title"
              onChange={this.onChange.bind(this)}
              checked={sortBy === "title"}
            />
            Name
          </label>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getProjects }
)(withRouter(PortfolioSort));
