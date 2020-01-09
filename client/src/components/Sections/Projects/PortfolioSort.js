import React, { Component } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

export class PortfolioSort extends Component {
  state = { sort: "quality" };

  componentDidMount = () => {
    // TODO validate url params
    const { search } = this.props.location;
    const { sort } = queryString.parse(search);
    if (sort) {
      this.setState({ sort });
    }
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({ sort: value });
    const { pathname, search } = this.props.location;
    const parsed = queryString.parse(search);
    if (value === "quality") {
      delete parsed.sort;
    } else {
      parsed.sort = value;
    }
    const query = queryString.stringify(parsed);
    this.props.history.push({ pathname, search: `?${query}` });
  };

  render() {
    const { sort } = this.state;
    return (
      <div className="pageAside__block">
        <h5 className="pageAside__title">Sort by</h5>
        <div className="pageAside__list">
          <label className={sort === "quality" ? "btn btn_active" : "btn"}>
            <input
              type="radio"
              className="hide"
              value="quality"
              onChange={this.onChange}
              checked={sort === "quality"}
            />
            Quality
          </label>

          <label className={sort === "date" ? "btn btn_active" : "btn"}>
            <input
              className="hide"
              type="radio"
              value="date"
              onChange={this.onChange}
              checked={sort === "date"}
            />
            Date
          </label>

          <label className={sort === "title" ? "btn btn_active" : "btn"}>
            <input
              type="radio"
              className="hide"
              value="title"
              onChange={this.onChange}
              checked={sort === "title"}
            />
            Title
          </label>
        </div>
      </div>
    );
  }
}

export default withRouter(PortfolioSort);
