import React, { Component } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

export class ProjectsAmount extends Component {
  state = { amount: "9" };

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
    if (value === "9") {
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
          <label className={amount === "9" ? "btn btn_active" : "btn"}>
            <input
              type="radio"
              className="hide"
              value="9"
              onChange={this.onChange}
              checked={amount === "9"}
            />
            9
          </label>

          <label className={amount === "15" ? "btn btn_active" : "btn"}>
            <input
              className="hide"
              type="radio"
              value="15"
              onChange={this.onChange}
              checked={amount === "15"}
            />
            15
          </label>

          <label className={amount === "30" ? "btn btn_active" : "btn"}>
            <input
              type="radio"
              className="hide"
              value="30"
              onChange={this.onChange}
              checked={amount === "30"}
            />
            30
          </label>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectsAmount);
