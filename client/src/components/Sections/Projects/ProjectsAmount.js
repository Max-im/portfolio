import React, { Component } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

export class ProjectsAmount extends Component {
  state = { amount: "12" };

  componentDidMount = () => {
    // TODO validate url params
    const { search } = this.props.location;
    const parsed = queryString.parse(search);
    if (parsed.amount) {
      this.setState({ amount: parsed.amount });
    }
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({ amount: value });
    const { pathname, search } = this.props.location;
    const parsed = queryString.parse(search);
    if (value === "12") {
      delete parsed.amount;
    } else {
      parsed.amount = value;
    }
    const query = queryString.stringify(parsed);
    this.props.history.push({ pathname, search: `?${query}` });
  };

  render() {
    const { amount } = this.state;
    return (
      <div className="pageAside__block">
        <h5 className="pageAside__title">Show on page</h5>
        <div className="pageAside__list">
          <label className={amount === "12" ? "btn btn_active" : "btn"}>
            <input
              type="radio"
              className="hide"
              value="12"
              onChange={this.onChange}
              checked={amount === "12"}
            />
            12
          </label>

          <label className={amount === "24" ? "btn btn_active" : "btn"}>
            <input
              className="hide"
              type="radio"
              value="24"
              onChange={this.onChange}
              checked={amount === "24"}
            />
            24
          </label>

          <label className={amount === "48" ? "btn btn_active" : "btn"}>
            <input
              type="radio"
              className="hide"
              value="48"
              onChange={this.onChange}
              checked={amount === "48"}
            />
            48
          </label>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectsAmount);
