import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import Input from "../../Common/Input";
import Select from "../../Common/Select";
import {
  getSkillsCategories,
  createSkill
} from "../../../store/actions/skills";

export class index extends Component {
  state = {
    skill_picture: "",
    source: "",
    skill: "",
    range: 1,
    category_id: 1
  };

  componentDidMount() {
    this.props.getSkillsCategories();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { skill, skill_picture, range, source, category_id } = this.state;
    this.props.createSkill({
      skill,
      skill_picture,
      range: range - 0,
      source,
      category_id: category_id - 0
    });
    this.setState({
      skill: "",
      skill_picture: "",
      range: "",
      source: "",
      category_id: ""
    });
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    skills: PropTypes.object.isRequired,
    getSkillsCategories: PropTypes.func.isRequired,
    createSkill: PropTypes.func.isRequired
  };

  render() {
    const { categories } = this.props.skills;
    return (
      <section className="section">
        <h3 className="section__title">Add skill</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <Input
            name="skill_picture"
            value={this.state.skill_picture}
            onChange={this.onChange.bind(this)}
          />
          <Input
            name="source"
            value={this.state.source}
            onChange={this.onChange.bind(this)}
          />
          <Input
            name="skill"
            value={this.state.skill}
            onChange={this.onChange.bind(this)}
          />

          <Select
            str="value"
            onChange={this.onChange.bind(this)}
            name="range"
            arr={[
              { value: 1, id: 1 },
              { value: 2, id: 2 },
              { value: 3, id: 3 }
            ]}
          />

          {categories && (
            <Select
              str="category"
              onChange={this.onChange.bind(this)}
              name="category_id"
              arr={categories}
            />
          )}

          <button type="submit">Add Skill</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { getSkillsCategories, createSkill }
)(index);
