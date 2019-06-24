import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import { getSummary } from "../../../store/actions/summary";

export class index extends Component {
  componentDidMount() {
    this.props.getSummary();
  }

  static propTypes = {
    getSummary: PropTypes.func.isRequired,
    summary: PropTypes.object.isRequired
  };

  render() {
    const { photo, summary, name } = this.props.summary;
    return (
      <section className="section">
        <h3 className="section__title">Summary</h3>
        <img src={photo} alt={name} />
        <p>{name}</p>
        <p>{summary}</p>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  summary: state.summary
});

export default connect(
  mapStateToProps,
  { getSummary }
)(index);
