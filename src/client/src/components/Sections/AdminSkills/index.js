import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";
import { getAdminSkills, deleteSkill } from "../../../store/actions/skills";

export class index extends Component {
  componentDidMount() {
    this.props.getAdminSkills();
  }

  onRemove(id) {
    if (window.confirm("Are you sure?")) this.props.deleteSkill(id);
  }

  static propTypes = {
    getAdminSkills: PropTypes.func.isRequired,
    deleteSkill: PropTypes.func.isRequired,
    skills: PropTypes.object.isRequired
  };

  render() {
    const { admin, error } = this.props.skills;
    return (
      <section className="section">
        <h3 className="section__title">Skills</h3>
        {admin && (
          <ul>
            <li className="skillsCat__item">
              <p>#</p>
              <p>Picture</p>
              <p>Skill</p>
              <p>Range</p>
              <p>Category</p>
              <p>Source</p>
              <p>Edit</p>
              <p>Delete</p>
            </li>
            {admin.map((item, i) => (
              <li key={item.skill} className="skillsCat__item">
                <img src={item.skill_picture} alt={item.skill} />
                <p>{item.skill}</p>
                <p>{item.range}</p>
                <p>{item.category}</p>
                <p>{item.source}</p>
                <Link
                  className="far fa-edit"
                  to={"/admin/update-skill/" + item.id}
                />
                <i
                  className="fas fa-trash-alt"
                  onClick={this.onRemove.bind(this, item.id)}
                />
              </li>
            ))}
          </ul>
        )}

        {error && <p className="error">{error}</p>}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { getAdminSkills, deleteSkill }
)(index);
