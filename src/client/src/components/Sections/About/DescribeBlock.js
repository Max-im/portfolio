import React, { Component } from "react";
import UpdatedText from "../../Common/UpdatedText";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSummary, updateSummary } from "../../../store/actions/summary";

export class AboutText extends Component {
  componentDidMount() {
    this.props.getSummary();
  }

  static propTypes = {
    getSummary: PropTypes.func.isRequired,
    updateSummary: PropTypes.func.isRequired,
    summary: PropTypes.object.isRequired
  };

  render() {
    const { summary } = this.props.summary;
    return (
      <div className="about__describeBlock">
        <UpdatedText
          text={summary}
          field="summary"
          onUpdate={updateSummary.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  summary: state.summary
});

export default connect(mapStateToProps, { getSummary, updateSummary })(
  AboutText
);
