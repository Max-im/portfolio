import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteExp } from "../../../store/actions/experience";

export class index extends Component {
  static propTypes = {
    experience: PropTypes.object.isRequired,
    deleteExp: PropTypes.func.isRequired
  };

  deleteExp(id) {
    if (window.confirm("Are you sure?")) this.props.deleteExp(id);
  }

  render() {
    const { id } = this.props;
    return (
      <div className="expControl">
        <Link
          className="far fa-edit btn btn__edit"
          to={"/admin/update-exp/" + id}
        />
        <i
          className="fas fa-trash-alt btn btn__delete"
          onClick={this.props.deleteExp.bind(null, id)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  experience: state.experience
});

export default connect(
  mapStateToProps,
  { deleteExp }
)(index);
