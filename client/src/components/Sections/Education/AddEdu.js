import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Select from "../../Common/Select";
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

                <Select
                  str="value"
                  onChange={this.onChange.bind(this)}
                  name="level_id"
                  selected={this.state.level_id}
                  arr={[
                    { value: "Best", id: 1 },
                    { value: "Medium", id: 2 },
                    { value: "Simple", id: 3 }
                  ]}
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
