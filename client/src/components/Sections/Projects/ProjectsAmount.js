import React, { Component } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

export class ProjectsAmount extends Component {
  state = { amount: "6" };

  componentDidMount = () => {
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
    if (value === "6") {
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
      <div className="projectsAside__block">
        <h5 className="projectsAside__title">Show on page</h5>
        <div className="projectsAside__list">
          <label className={amount === "6" ? "btn btn_active" : "btn"}>
            <input
              type="radio"
              className="hide"
              value="6"
              onChange={this.onChange}
              checked={amount === "6"}
            />
            6
          </label>

          <label className={amount === "9" ? "btn btn_active" : "btn"}>
            <input
              className="hide"
              type="radio"
              value="9"
              onChange={this.onChange}
              checked={amount === "9"}
            />
            9
          </label>

          <label className={amount === "15" ? "btn btn_active" : "btn"}>
            <input
              type="radio"
              className="hide"
              value="15"
              onChange={this.onChange}
              checked={amount === "15"}
            />
            15
          </label>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectsAmount);
