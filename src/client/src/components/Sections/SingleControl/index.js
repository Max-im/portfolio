import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "./style.scss";
import { deleteProject } from "../../../store/actions/projectes";

export class index extends Component {
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
            <h3>Control</h3>
            <Link
              className="fas fa-trash-alt singleControl__delete"
              onClick={this.props.deleteProject.bind(this, project_id)}
              to="/portfolio"
            >
              Delete the Project
            </Link>
            <Link
              className="fas fa-edit singleControl__update"
              to={"/portfolio/update-project/" + project_id}
            >
              Update the Project
            </Link>
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
