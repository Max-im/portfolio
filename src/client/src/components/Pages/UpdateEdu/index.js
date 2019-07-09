import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PageTitle from "../../Common/PageTitle";
import Input from "../../Common/Input";
import { getEdu, updateEdu } from "../../../store/actions/education";
import Spinner from "../../Common/Spinner";
import "./style.scss";

export class index extends Component {
  state = { edu_photo: "", range: 1, edu_title: "", edu_description: "" };

  componentDidMount() {
    if (!this.props.education.edu) this.props.getEdu();
    else this.onStateInit();
  }

  componentDidUpdate(prev) {
    if (!prev.education.edu && this.props.education.edu) this.onStateInit();
  }

  onStateInit() {
    const { id } = this.props.match.params;
    const edu = this.props.education.edu.find(item => item.id - 0 === id - 0);
    const { edu_photo, range, edu_title, edu_description } = edu;
    this.setState({ edu_photo, range, edu_title, edu_description });
  }

  static propTypes = {
    education: PropTypes.object.isRequired,
    getEdu: PropTypes.func.isRequired,
    updateEdu: PropTypes.func.isRequired
  };

  onSubmit(e) {
    e.preventDefault();
    const { id } = this.props.match.params;
    this.props.updateEdu({ ...this.state, id }, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { edu, loading, error } = this.props.education;
    return (
      <div className="page">
        <PageTitle text="Update Edu" />

        <div className="container">
          {edu && (
            <form onSubmit={this.onSubmit.bind(this)}>
              <Input
                name="edu_photo"
                onChange={this.onChange.bind(this)}
                value={this.state.edu_photo}
              />
              <Input
                name="range"
                onChange={this.onChange.bind(this)}
                value={this.state.range}
              />
              <Input
                name="edu_title"
                onChange={this.onChange.bind(this)}
                value={this.state.edu_title}
              />
              <Input
                name="edu_description"
                onChange={this.onChange.bind(this)}
                value={this.state.edu_description}
              />

              <button type="submit">Save</button>
            </form>
          )}

          {error && <p className="error">{error}</p>}
          {loading && <Spinner />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  education: state.education
});

export default connect(
  mapStateToProps,
  { getEdu, updateEdu }
)(withRouter(index));
