import React, { Component } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProjects } from "../../../store/actions/projectes";
import "./style.scss";

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
      <div>
        <label>
          <input
            name="sortBy"
            type="radio"
            value="level_id"
            onChange={this.onChange.bind(this)}
            checked={this.state.sortBy === "level_id"}
          />
          by level
        </label>

        <label>
          <input
            name="sortBy"
            type="radio"
            value="date"
            onChange={this.onChange.bind(this)}
            checked={this.state.sortBy === "date"}
          />
          by date
        </label>

        <label>
          <input
            name="sortBy"
            type="radio"
            value="title"
            onChange={this.onChange.bind(this)}
            checked={this.state.sortBy === "title"}
          />
          by name
        </label>
      </div>
    );
  }
}

export default connect(
  null,
  { getProjects }
)(withRouter(index));
