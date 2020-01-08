import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { deleteProject } from "../../../store/actions/projects";

export class index extends Component {
  onDelete(id) {
    if (window.confirm("Are you sure?")) {
      this.props.deleteProject(id, this.props.history);
    }
  }

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { user, isAuth } = this.props.auth;
    const { id: project_id } = this.props.match.params;

    return (
      <div className="singleControl">
        {isAuth && user.isadmin && (
          <section className="section">
            <h3 className="section__title">Control</h3>
            <div className="singleControll__body">
              <i
                className="fas fa-trash-alt singleControll__item singleControll__delete"
                onClick={this.onDelete.bind(this, project_id)}
              >
                Delete
              </i>
              <Link
                className="fas fa-edit singleControll__item singleControll__update"
                to={"/portfolio/update-project/" + project_id}
              >
                Update
              </Link>
            </div>
          </section>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteProject }
)(withRouter(index));
