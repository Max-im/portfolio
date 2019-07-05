import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import { getAdminSkills, removeSkill } from "../../../store/actions/skills";

export class index extends Component {
  componentDidMount() {
    this.props.getAdminSkills();
  }

  onRemove(id) {
    if (window.confirm("Are you sure?")) this.props.removeSkill(id);
  }

  static propTypes = {
    getAdminSkills: PropTypes.func.isRequired,
    removeSkill: PropTypes.func.isRequired,
    skills: PropTypes.object.isRequired
  };

  render() {
    const { admin } = this.props.skills;
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
              <p>Delete</p>
            </li>
            {admin.map((item, i) => (
              <li key={item.skill} className="skillsCat__item">
                <img src={item.skill_picture} alt={item.skill} />
                <p>{item.skill}</p>
                <p>{item.range}</p>
                <p>{item.category}</p>
                <p>{item.source}</p>
                <i
                  className="fas fa-trash-alt"
                  onClick={this.onRemove.bind(this, item.id)}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { getAdminSkills, removeSkill }
)(index);
