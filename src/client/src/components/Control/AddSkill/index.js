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

const initState = {
  skill_picture: "",
  source: "",
  skill: "",
  range: 1,
  category_id: 1
};

export class index extends Component {
  state = { ...initState };

  componentDidMount() {
    if (!this.props.skills.categories) this.props.getSkillsCategories();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onUploadFile(e) {
    this.setState({ skill_picture: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();
    const { range, category_id } = this.state;
    this.props.createSkill({
      ...this.state,
      range: range - 0,
      category_id: category_id - 0
    });
    this.setState({ ...initState });
  }

  static propTypes = {
    skills: PropTypes.object.isRequired,
    getSkillsCategories: PropTypes.func.isRequired,
    createSkill: PropTypes.func.isRequired
  };

  render() {
    const { categories } = this.props.skills;
    return (
      <section className="section addSkill">
        <div className="container">
          <h3 className="section__title">Add skill</h3>

          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="file" onChange={this.onUploadFile.bind(this)} />

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
  { getSkillsCategories, createSkill }
)(index);
