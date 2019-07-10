import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";
import { deleteSkill } from "../../../store/actions/skills";

export class index extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    deleteSkill: PropTypes.func.isRequired
  };

  onDelete(id) {
    if (window.confirm("Are you sure?")) this.props.deleteSkill(id);
  }

  render() {
    const { skill } = this.props;
    const { user } = this.props.auth;
    return (
      <li className="skill">
        <a href={skill.source} target="_blank" rel="noopener noreferrer">
          <img
            className="skill__img"
            src={skill.skill_picture}
            alt={skill.skill}
          />
        </a>

        {user.isadmin && (
          <div>
            <Link
              className="far fa-edit"
              to={"/admin/update-skill/" + skill.id}
            />
            <i
              className="far fa-trash-alt"
              onClick={this.onDelete.bind(this, skill.id)}
            />
          </div>
        )}
      </li>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteSkill }
)(index);
