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

  static propTypes = {
    auth: PropTypes.object.isRequired,
    createEdu: PropTypes.func.isRequired
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.createEdu(this.state);
    this.setState({ edu_photo: "", edu_title: "", edu_description: "" });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { user } = this.props.auth;
    return (
      <>
        {user.isadmin && (
          <section className="section">
            <div className="container">
              <h3 className="section__title">Add Education</h3>
              <form onSubmit={this.onSubmit.bind(this)}>
                {Object.keys(this.state).map(item => (
                  <Input
                    key={item}
                    onChange={this.onChange.bind(this)}
                    name={item}
                    value={this.state[item]}
                  />
                ))}
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
