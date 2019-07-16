import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.scss";
import PageTitle from "../../Common/PageTitle";
import Input from "../../Common/Input";
import Select from "../../Common/Select";
import Spinner from "../../Common/Spinner";
import {
  getSkills,
  updateSkill,
  getSkillsCategories
} from "../../../store/actions/skills";

export class index extends Component {
  static propTypes = {
    getSkillsCategories: PropTypes.func.isRequired,
    getSkills: PropTypes.func.isRequired,
    updateSkill: PropTypes.func.isRequired,
    skills: PropTypes.object.isRequired
  };

  state = {
    skill_picture: "",
    source: "",
    skill: "",
    range: 1,
    category_id: 1
  };

  componentDidMount() {
    if (!this.props.skills.skills) {
      this.props.getSkills();
      this.props.getSkillsCategories();
    } else this.onStateInit();
  }

  componentDidUpdate(prev) {
    if (!prev.skills.skills && this.props.skills.skills) this.onStateInit();
  }

  onStateInit() {
    const { id } = this.props.match.params;
    const { skills } = this.props.skills;
    const { skill_picture, source, skill, range, category_id } = skills.find(
      item => item.id - 0 === id - 0
    );
    this.setState({ skill_picture, source, skill, range, category_id });
  }

  onSubmit(e) {
    e.preventDefault();
    const { id } = this.props.match.params;
    this.props.updateSkill({ ...this.state, id }, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {
      categories,
      skills,
      error,
      categoryError,
      loading
    } = this.props.skills;
    const { id } = this.props.match.params;

    let theSkill;
    if (skills) theSkill = skills.find(v => v.id - 0 === id - 0);

    return (
      <div className="page">
        <PageTitle text="Update Skill" />

        <div className="container">
          {theSkill && categories && (
            <form onSubmit={this.onSubmit.bind(this)}>
              <Input
                onChange={this.onChange.bind(this)}
                value={this.state.skill_picture}
                name="skill_picture"
              />
              <Input
                onChange={this.onChange.bind(this)}
                value={this.state.source || ""}
                name="source"
              />
              <Input
                onChange={this.onChange.bind(this)}
                value={this.state.skill}
                name="skill"
              />

              <Select
                str="value"
                onChange={this.onChange.bind(this)}
                name="range"
                selected={this.state.range}
                arr={[
                  { value: 1, id: 1 },
                  { value: 2, id: 2 },
                  { value: 3, id: 3 }
                ]}
              />

              <Select
                str="category"
                selected={this.state.category_id}
                onChange={this.onChange.bind(this)}
                name="category_id"
                arr={categories}
              />

              <button type="submit">Save</button>
            </form>
          )}

          {categoryError && <p className="error">{categoryError}</p>}
          {error && <p className="error">{error}</p>}
          {loading && <Spinner />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { getSkillsCategories, getSkills, updateSkill }
)(withRouter(index));
