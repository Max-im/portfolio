import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCategory } from "../../../store/actions/skills";

export class index extends Component {
  onDelete() {
    if (window.confirm("Are you sure?")) {
      this.props.deleteCategory(this.props.category);
    }
  }

  static propTypes = {
    deleteCategory: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <i className="far fa-trash-alt" onClick={this.onDelete.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { deleteCategory }
)(index);
