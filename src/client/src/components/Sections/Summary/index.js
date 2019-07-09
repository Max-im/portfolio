import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSummary, updateSummary } from "../../../store/actions/summary";
import "./style.scss";
import UpdatedText from "../../Common/UpdatedText";
import Spinner from "../../Common/Spinner";

export class index extends Component {
  componentDidMount() {
    this.props.getSummary();
  }

  static propTypes = {
    getSummary: PropTypes.func.isRequired,
    summary: PropTypes.object.isRequired
  };

  render() {
    const { photo, summary, name, loading, error } = this.props.summary;
    return (
      <section className="section summary">
        <div className="container">
          <h3 className="section__title">Summary</h3>

          <div className="summary__body">
            <img src={photo} alt={name} className="summary__img" />
            <p className="summary__name">{name}</p>
          </div>

          <UpdatedText
            text={summary}
            onUpdate={this.props.updateSummary.bind(this)}
          />

          {error && <p className="error">{error}</p>}
          {loading && <Spinner />}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  summary: state.summary
});

export default connect(
  mapStateToProps,
  { getSummary, updateSummary }
)(index);
