import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSkills } from "../../../store/actions/skills";
import "./style.scss";
import SkillItem from "../../Items/SkillItem";

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
    const isReady = skills && !loading;

    return (
      <section className="section skills">
        <h3 className="section__title">Skills</h3>

        <ul>
          {isReady
            ? Object.keys(skills).map(category => (
                // loop categories
                <li key={category}>
                  <h5 className="skills__category">{category}</h5>

                  {/* Loop skills of the particular category */}
                  <ul className="skills__list">
                    {skills[category].map(skill => (
                      <SkillItem key={skill.id} skill={skill} />
                    ))}
                  </ul>
                </li>
              ))
            : "Loading..."}
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
