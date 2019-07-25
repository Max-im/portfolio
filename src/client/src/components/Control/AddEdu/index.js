import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import Input from "../../Common/Input";
import { createEdu } from "../../../store/actions/education";

export class index extends Component {
  state = {
    edu_photo: "",
    edu_title: "",
    edu_description: ""
  };

  onUploadFile(e) {
    this.setState({ edu_photo: e.target.files[0] });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.createEdu(this.state);
    this.setState({ edu_photo: "", edu_title: "", edu_description: "" });
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    createEdu: PropTypes.func.isRequired
  };

  render() {
    const { user } = this.props.auth;
    return (
      <>
        {user.isadmin && (
          <section className="section">
            <div className="container">
              <h3 className="section__title">Add Education</h3>
              <form onSubmit={this.onSubmit.bind(this)}>
                <input
                  type="file"
                  name="edu_photo"
                  onChange={this.onUploadFile.bind(this)}
                />

                <Input
                  onChange={this.onChange.bind(this)}
                  name="edu_title"
                  value={this.state.edu_title}
                />

                <Input
                  onChange={this.onChange.bind(this)}
                  name="edu_description"
                  value={this.state.edu_description}
                />
                <button type="submit">Add Edu</button>
              </form>
            </div>
          </section>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createEdu }
)(index);
