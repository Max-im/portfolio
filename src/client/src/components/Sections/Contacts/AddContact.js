import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Input from "../../Common/Input";
import { validateAddContact } from "../../../helpers/validation";
import { createContact } from "../../../store/actions/contacts";

const initState = {
  contact_title: "",
  contact_value: "",
  contact_picture: null,
  error: null
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
    const setState = this.setState.bind(this);
    const { isErr, data } = validateAddContact(this.state, setState);
    if (isErr) return;

    this.props.createContact(data);
    this.setState({ ...initState });
  }

  static propTypes = {
    createContact: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="addContact">
        <h3 className="section__title">Add Contact</h3>

        {this.state.error && <p className="error">{this.state.error}</p>}

        <form onSubmit={this.onSubmit.bind(this)} className="addContact__form">
          <label className="addContact__item">
            <p>Title</p>
            <Input
              clasName="addContact__input"
              value={this.state.contact_title}
              name="contact_title"
              onChange={this.onChange.bind(this)}
            />
          </label>

          <label className="addContact__item">
            <p>Value</p>
            <Input
              clasName="addContact__input"
              value={this.state.contact_value}
              name="contact_value"
              onChange={this.onChange.bind(this)}
            />
          </label>

          <label className="addContact__item">
            <p>Photo</p>
            <input
              className="addContact__input"
              type="file"
              accept="image/*"
              name="contact_picture"
              onChange={this.onUploadFile.bind(this)}
            />
          </label>

          <button className="section__btn" type="submit">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createContact }
)(index);
