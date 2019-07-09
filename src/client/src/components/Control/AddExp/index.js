import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import Input from "../../Common/Input";
import TextArea from "../../Common/TextArea";
import { createExp } from "../../../store/actions/experience";

export class index extends Component {
  state = {
    exp_title: "",
    exp_company: "",
    exp_from: "",
    exp_to: "",
    exp_is_current: false,
    exp_image: "",
    exp_description: ""
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    createExp: PropTypes.func.isRequired
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.createExp(this.state);
    this.setState({
      exp_title: "",
      exp_company: "",
      exp_from: "",
      exp_to: "",
      exp_is_current: false,
      exp_image: "",
      exp_description: ""
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onToggle() {
    this.setState({ exp_is_current: !this.state.exp_is_current });
  }

  render() {
    const { user } = this.props.auth;

    return (
      <>
        {user.isadmin && (
          <section className="section">
            <div className="container">
              <h3 className="section__title">Add Experience</h3>

              <form onSubmit={this.onSubmit.bind(this)}>
                <Input
                  onChange={this.onChange.bind(this)}
                  name="exp_title"
                  value={this.state.exp_title}
                />
                <Input
                  onChange={this.onChange.bind(this)}
                  name="exp_company"
                  value={this.state.exp_company}
                />
                <Input
                  onChange={this.onChange.bind(this)}
                  name="exp_image"
                  value={this.state.exp_image}
                />
                <Input
                  onChange={this.onChange.bind(this)}
                  name="exp_from"
                  value={this.state.exp_from}
                />
                <div>
                  <label>
                    current
                    <input
                      type="checkbox"
                      name="exp_is_current"
                      onChange={this.onToggle.bind(this)}
                      defaultChecked={this.state.exp_is_current}
                    />
                  </label>
                </div>

                {!this.state.exp_is_current && (
                  <Input
                    onChange={this.onChange.bind(this)}
                    name="exp_to"
                    value={this.state.exp_to}
                  />
                )}

                <TextArea
                  onChange={this.onChange.bind(this)}
                  name="exp_description"
                  value={this.state.exp_description}
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
  { createExp }
)(index);
