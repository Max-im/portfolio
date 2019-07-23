import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { connect } from "react-redux";
import { getProjects, getProjectsNum } from "../../../store/actions/projectes";

export class index extends Component {
  state = { quality: [] };

  componentDidMount() {
    const { quality } = queryString.parse(this.props.history.location.search);
    if (!quality) return;
    const qualityArr = quality.split(",");
    this.setState({ quality: qualityArr });
  }

  static propTypes = {
    portfolio: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired,
    getProjectsNum: PropTypes.func.isRequired
  };

  changeFilter(e) {
    // change local state
    let newQuality = [];
    if (this.state.quality.includes(e.target.name)) {
      newQuality = this.state.quality.filter(item => item !== e.target.name);
    } else {
      newQuality = [...this.state.quality, e.target.name];
    }
    this.setState({ quality: newQuality });

    // change URL
    if (newQuality.length === 0) this.props.history.push("/portfolio");
    else {
      const theQuery = newQuality.join(",");
      this.props.history.push(`/portfolio?quality=${theQuery}`);
    }

    this.props.getProjects(1, this.props.history);
    this.props.getProjectsNum(this.props.history);
  }

  render() {
    const { quality } = this.state;
    return (
      <div>
        <div>
          <h5>Quality</h5>
          <label>
            <input
              type="checkbox"
              name="best"
              checked={quality.includes("best")}
              data-meta="quality"
              onChange={this.changeFilter.bind(this)}
            />
            best
          </label>

          <label>
            <input
              type="checkbox"
              name="medium"
              data-meta="quality"
              checked={quality.includes("medium")}
              onChange={this.changeFilter.bind(this)}
            />
            medium
          </label>

          <label>
            <input
              type="checkbox"
              name="simple"
              data-meta="quality"
              checked={quality.includes("simple")}
              onChange={this.changeFilter.bind(this)}
            />
            simple
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  { getProjects, getProjectsNum }
)(withRouter(index));
