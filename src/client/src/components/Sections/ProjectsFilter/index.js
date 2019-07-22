import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { onFilter } from "../../../store/actions/projectes";

export class index extends Component {
  static propTypes = {
    portfolio: PropTypes.object.isRequired,
    onFilter: PropTypes.func.isRequired
  };

  render() {
    const { query } = this.props.portfolio;
    return (
      <div>
        <div>
          <h5>Quality</h5>
          <label>
            <input
              type="checkbox"
              name="best"
              checked={query.quality.includes("best")}
              data-meta="quality"
              onChange={this.props.onFilter.bind(this)}
            />{" "}
            best
          </label>

          <label>
            <input
              type="checkbox"
              name="medium"
              data-meta="quality"
              checked={query.quality.includes("medium")}
              onChange={this.props.onFilter.bind(this)}
            />{" "}
            medium
          </label>

          <label>
            <input
              type="checkbox"
              name="simple"
              data-meta="quality"
              checked={query.quality.includes("simple")}
              onChange={this.props.onFilter.bind(this)}
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
  { onFilter }
)(index);
