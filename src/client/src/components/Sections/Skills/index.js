import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSkills } from "../../../store/actions/skills";
import "./style.scss";
import SkillItem from "../../Items/SkillItem";
import Spinner from "../../Common/Spinner";

export class index extends Component {
  componentDidMount() {
    this.props.getSkills();
  }

  static propTypes = {
    skills: PropTypes.object.isRequired,
    getSkills: PropTypes.func.isRequired
  };

  render() {
    const { skills, error, loading } = this.props.skills;

    return (
      <section className="section skills">
        <div className="container">
          <h3 className="section__title">Skills</h3>

          {skills && (
            <ul>
              {Object.keys(skills).map(category => (
                <li key={category}>
                  <h5 className="skills__category">{category}</h5>

                  {/* Loop skills of the particular category */}
                  <ul className="skills__list">
                    {skills[category].map(skill => (
                      <SkillItem key={skill.id} skill={skill} />
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}

          {error && <p className="error skills__error">{error}</p>}
          {loading && <Spinner />}
        </div>
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
