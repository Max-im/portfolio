import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PortfolioFilter from "./PortfolioFilter";

export class PortfolioAside extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { pathname } = this.props.location;
    return (
      <div>
        {pathname === "/portfolio" && (
          <>
            <PortfolioFilter />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PortfolioAside));
