import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSkills } from "../../../store/actions/skills";
import "./style.scss";
import SkillItem from "../../Items/SkillItem";
import Spinner from "../../Common/Spinner";
import CategoryControl from "../../Control/CategoryControl";
import SkillControl from "../../Control/SkillControl";

export class index extends Component {
  componentDidMount() {
    this.props.getSkills();
  }

  static propTypes = {
    skills: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getSkills: PropTypes.func.isRequired
  };

  render() {
    const { skills, error, loading } = this.props.skills;
    const { isadmin } = this.props.auth.user;

    return (
      <section className="section skills">
        <div className="container">
          <h3 className="section__title">Skills</h3>

          {skills && (
            <ul>
              {Object.keys(skills).map(category => (
                <li key={category}>
                  <div>
                    <h5 className="skills__category">{category}</h5>
                    {isadmin && <CategoryControl category={category} />}
                  </div>

                  {/* Loop skills of the particular category */}
                  <ul className="skills__list">
                    {skills[category].map(skill => (
                      <li key={skill.id}>
                        <SkillItem skill={skill} />
                        {isadmin && <SkillControl id={skill.id} />}
                      </li>
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
  skills: state.skills,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getSkills }
)(index);
