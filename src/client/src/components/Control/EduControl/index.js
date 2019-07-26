import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteEdu } from "../../../store/actions/education";

export class index extends Component {
  static propTypes = {
    deleteEdu: PropTypes.func.isRequired
  };

  onDelete(id) {
    if (window.confirm("Are you sure?")) this.props.deleteEdu(id);
  }

  render() {
    const { id } = this.props;
    return (
      <div className="eduControl">
        <Link
          className="far fa-edit btn btn__edit"
          to={"/admin/update-edu/" + id}
        />
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
  { deleteEdu }
)(index);
