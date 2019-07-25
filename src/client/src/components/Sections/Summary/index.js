import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UpdatedText from "../../Common/UpdatedText";
import Spinner from "../../Common/Spinner";
import { getSummary, updateSummary } from "../../../store/actions/summary";
import "./style.scss";

export class index extends Component {
  componentDidMount() {
    this.props.getSummary();
  }

  static propTypes = {
    getSummary: PropTypes.func.isRequired,
    updateSummary: PropTypes.func.isRequired,
    summary: PropTypes.object.isRequired
  };

  render() {
    const { photo, summary, name, loading, error } = this.props.summary;
    const { updateSummary } = this.props;

    return (
      <section className="section summary">
        <div className="container">
          <h3 className="section__title">Summary</h3>

          <img src={photo} alt={name} className="summary__img" />

          <UpdatedText
            text={name}
            field="name"
            onUpdate={updateSummary.bind(this)}
          />

          <UpdatedText
            text={summary}
            field="summary"
            onUpdate={updateSummary.bind(this)}
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
