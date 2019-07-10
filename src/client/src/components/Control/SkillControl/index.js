import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteSkill } from "../../../store/actions/skills";

export class index extends Component {
  onDelete() {
    if (window.confirm("Are you sure?")) this.props.deleteSkill(this.props.id);
  }

  static propTypes = {
    deleteSkill: PropTypes.func.isRequired
  };

  render() {
    const { id } = this.props;
    return (
      <div>
        <Link className="far fa-edit" to={"/admin/update-skill/" + id} />
        <i className="far fa-trash-alt" onClick={this.onDelete.bind(this)} />
      </div>
    );
  }
}

export default connect(
  null,
  { deleteSkill }
)(index);
