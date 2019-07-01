import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSummary } from "../../../store/actions/summary";
import "./style.scss";

export class index extends Component {
  componentDidMount() {
    this.props.getSummary();
  }

  static propTypes = {
    getSummary: PropTypes.func.isRequired,
    summary: PropTypes.object.isRequired
  };

  render() {
    const { photo, summary, name, loading } = this.props.summary;
    return (
      <section className="section summary">
        <h3 className="section__title">Summary</h3>
        {loading ? (
          "Loading..."
        ) : (
          <>
            <div className="summary__body">
              <img src={photo} alt={name} className="summary__img" />
              <p className="summary__name">{name}</p>
            </div>
            <p className="summary__text">{summary}</p>
          </>
        )}
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