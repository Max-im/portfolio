import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../../store/actions/contacts";
import "./style.scss";

export class index extends Component {
  static propTypes = {
    deleteContact: PropTypes.func.isRequired
  };

  onDelete(id) {
    if (window.confirm("Are you sure")) this.props.deleteContact(id);
  }

  render() {
    const { id } = this.props;
    return (
      <div className="contactControl">
        <i
          className="fas fa-trash-alt btn btn__delete"
          onClick={this.onDelete.bind(this, id)}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { deleteContact }
)(index);
