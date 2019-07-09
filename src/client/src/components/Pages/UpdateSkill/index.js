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
  getSkillsCategories,
  getAdminSkills,
  updateSkill
} from "../../../store/actions/skills";

export class index extends Component {
  static propTypes = {
    getSkillsCategories: PropTypes.func.isRequired,
    getAdminSkills: PropTypes.func.isRequired,
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
    this.props.getSkillsCategories();
    if (!this.props.skills.admin) this.props.getAdminSkills();
    else this.onStateInit();
  }

  componentDidUpdate(prev) {
    if (!prev.skills.admin && this.props.skills.admin) this.onStateInit();
  }

  onStateInit() {
    const { id } = this.props.match.params;
    const { admin, categories } = this.props.skills;
    const { skill_picture, source, skill, range, category } = admin.find(
      item => item.id - 0 === id - 0
    );
    const category_id = categories.find(item => item.category === category).id;
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
      admin,
      error,
      categoryError,
      loading
    } = this.props.skills;
    const { id } = this.props.match.params;
    let skill, selectedCat;
    if (admin) {
      skill = admin.find(item => item.id - 0 === id - 0);
    }
    if (categories && skill) {
      selectedCat = categories.find(item => item.category === skill.category)
        .id;
    }
    return (
      <div className="page">
        <PageTitle text="Update Skill" />
        <div className="container">
          {skill && categories && (
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
                selected={selectedCat}
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
  { getSkillsCategories, getAdminSkills, updateSkill }
)(withRouter(index));
