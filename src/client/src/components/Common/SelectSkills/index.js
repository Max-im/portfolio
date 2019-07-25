import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSkills, getSkillsCategories } from "../../../store/actions/skills";
import Spinner from "../../Common/Spinner";
import SelectSkillItem from "../../Items/SelectSkillItem";

export class index extends Component {
  componentDidMount() {
    if (!this.props.skills.skills) this.props.getSkills();
    if (!this.props.skills.categories) this.props.getSkillsCategories();
  }

  static propTypes = {
    getSkills: PropTypes.func.isRequired,
    getSkillsCategories: PropTypes.func.isRequired,
    skills: PropTypes.object.isRequired
  };

  render() {
    // get from parrent component
    const { stateSkills, toggleSkill } = this.props;

    // get from store
    const { loading, skills } = this.props.skills;
    const isReady = skills && !loading;

    return (
      <ul className="addProject__skills">
        {isReady &&
          skills.map(skill => (
            <SelectSkillItem
              skill={skill}
              toggleSkill={toggleSkill}
              stateSkills={stateSkills}
            />
          ))}
        {!isReady && <Spinner />}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { getSkills, getSkillsCategories }
)(index);
