import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getSkills,
  getSkillsCategories,
  deleteCategory
} from "../../../store/actions/skills";
import "./style.scss";
import SkillItem from "../../Items/SkillItem";
import Spinner from "../../Common/Spinner";

export class index extends Component {
  componentDidMount() {
    this.props.getSkills();
    if (this.props.auth.user.isadmin) this.props.getSkillsCategories();
  }

  onDeleteCat(name) {
    if (!window.confirm("Are you sure?")) return;
    const category = this.props.skills.categories.find(
      item => item.category === name
    );
    if (category.id) this.props.deleteCategory(category.id);
  }

  static propTypes = {
    skills: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getSkills: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    getSkillsCategories: PropTypes.func.isRequired
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
                  <h5 className="skills__category">{category}</h5>
                  {isadmin && (
                    <i
                      className="far fa-trash-alt"
                      onClick={this.onDeleteCat.bind(this, category)}
                    />
                  )}

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
  skills: state.skills,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getSkills, getSkillsCategories, deleteCategory }
)(index);
