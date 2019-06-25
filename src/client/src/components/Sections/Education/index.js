import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import { getEdu } from "../../../store/actions/education";
import EduItem from "../../Items/EduItem";

export class index extends Component {
  componentDidMount() {
    this.props.getEdu();
  }

  static propTypes = {
    education: PropTypes.object.isRequired,
    getEdu: PropTypes.func.isRequired
  };

  render() {
    const { edu, loading } = this.props.education;
    return (
      <section className="section">
        <h3 className="section__title">Education</h3>

        <ul>
          {loading
            ? "Loading..."
            : edu.map(eduItem => (
                <EduItem key={eduItem.id} eduItem={eduItem} />
              ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  education: state.education
});

export default connect(
  mapStateToProps,
  { getEdu }
)(index);
