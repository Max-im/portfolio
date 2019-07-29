import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Input from "../../Common/Input";
import Select from "../../Common/Select";
import "./style.scss";
import { createContact } from "../../../store/actions/contacts";

const initState = {
  contact_title: "",
  contact_value: "",
  contact_type: "text",
  contact_picture: ""
};

export class index extends Component {
  state = { ...initState };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onUploadFile(e) {
    this.setState({ contact_picture: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.createContact(this.state);
    this.setState({ ...initState });
  }

  static propTypes = {
    createContact: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="addContact">
        <form onSubmit={this.onSubmit.bind(this)}>
          <Input
            value={this.state.contact_title}
            name="contact_title"
            onChange={this.onChange.bind(this)}
          />

          <Input
            value={this.state.contact_value}
            name="contact_value"
            onChange={this.onChange.bind(this)}
          />

          <Select
            str="value"
            onChange={this.onChange.bind(this)}
            name="contact_type"
            selected={this.state.contact_type}
            arr={[{ value: "text", id: "text" }, { value: "link", id: "link" }]}
          />

          <input
            type="file"
            name="contact_picture"
            onChange={this.onUploadFile.bind(this)}
          />

          <button type="submit">Add Contact</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { createContact }
)(index);
