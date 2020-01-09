import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

export class PortfolioQuality extends Component {
  state = { quality: [] };

  componentDidMount = () => {
    // TODO validate url params
    const { pathname, search } = this.props.location;
    const parsed = queryString.parse(search);
    if (parsed.quality) {
      let quality = parsed.quality.split(",");
      if (quality.length >= 3) {
        quality = [];
        parsed.quality = []
        const query = queryString.stringify(parsed);
        this.props.history.push({ pathname, search: `?${query}` });
      }
      this.setState({ quality });
    }
  };

  onChange = e => {
    const { name } = e.target;
    let newQuality = [];
    if (this.state.quality.includes(name)) {
      newQuality = this.state.quality.filter(item => item !== name);
    } else {
      newQuality = [...this.state.quality, name];
    }
    this.setState({ quality: newQuality });
    const { pathname, search } = this.props.location;
    const parsed = queryString.parse(search);
    if (newQuality.length > 0) {
      parsed.quality = newQuality.join(",");
    } else {
      delete parsed.quality;
    }
    const query = queryString.stringify(parsed);
    this.props.history.push({ pathname, search: `?${query}` });
  };

  render() {
    const { quality } = this.state;
    return (
      <div className="projectsAside__block">
        <div>
          <h5 className="projectsAside__title">Filter by quality</h5>
          <div className="projectsAside__list">
            <label
              className={quality.includes("best") ? "btn btn_active" : "btn"}
            >
              <input
                type="checkbox"
                name="best"
                className="hide"
                checked={quality.includes("best")}
                onChange={this.onChange}
              />
              Best
            </label>

            <label
              className={quality.includes("medium") ? "btn btn_active" : "btn"}
            >
              <input
                type="checkbox"
                name="medium"
                className="hide"
                checked={quality.includes("medium")}
                onChange={this.onChange}
              />
              Medium
            </label>

            <label
              className={quality.includes("simple") ? "btn btn_active" : "btn"}
            >
              <input
                type="checkbox"
                name="simple"
                className="hide"
                checked={quality.includes("simple")}
                onChange={this.onChange}
              />
              Simple
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PortfolioQuality);
