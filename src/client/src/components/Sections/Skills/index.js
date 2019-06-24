import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSkills } from "../../../store/actions/skills";
import "./style.scss";

export class index extends Component {
  componentDidMount() {
    this.props.getSkills();
  }

  static propTypes = {
    skills: PropTypes.object.isRequired,
    getSkills: PropTypes.func.isRequired
  };

  render() {
    const { skills, loading } = this.props.skills;

    return (
      <section className="section skills">
        <h3 className="section__title">Skills</h3>

        <ul>
          {loading
            ? "Loading..."
            : Object.keys(skills).map(category => (
                <li key={category}>
                  <h5 className="skills__category">{category}</h5>
                  <ul className="skills__list">
                    {skills[category].map(skill => (
                      <li key={skill.id} className="skills__item">
                        <img
                          className="skills__img"
                          src={skill.picture}
                          alt={skill.skill}
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { getSkills }
)(index);
