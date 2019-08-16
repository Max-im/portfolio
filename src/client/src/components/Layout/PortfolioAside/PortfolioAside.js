import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PortfolioFilter from "./PortfolioFilter";
import PortfolioSort from "./PortfolioSort";
import "./style.scss";

export class PortfolioAside extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { pathname } = this.props.location;
    return (
      <>
        {pathname === "/portfolio" && (
          <div className="portfolioAside">
            <PortfolioFilter />
            <PortfolioSort />
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PortfolioAside));
