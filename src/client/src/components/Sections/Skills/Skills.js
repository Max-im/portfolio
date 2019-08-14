import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSkills, getSkillsCategories } from "../../../store/actions/skills";
import SkillItem from "./SkillItem";
import AddCategory from "./AddCategory";
import AddSkill from "./AddSkill";
import Spinner from "../../Common/Spinner";
import CategoryControl from "./CategoryControl";
import "./style.scss";

export class index extends Component {
  componentDidMount() {
    this.props.getSkills();
    this.props.getSkillsCategories();
  }

  static propTypes = {
    skills: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getSkills: PropTypes.func.isRequired,
    getSkillsCategories: PropTypes.func.isRequired
  };

  render() {
    const { skills, categories, error, loading } = this.props.skills;
    const { isadmin } = this.props.auth.user;

    return (
      <section className="section section__colored section__colored_1 skills">
        <div className="container">
          <h3 className="section__title">Skills</h3>

          {categories && skills && (
            <ul>
              {categories.map(category => (
                <li key={category.id} className="category__list">
                  {/* Category data */}
                  <div className="category__item">
                    <h3 className="category__title">{category.category}</h3>
                    {isadmin && <CategoryControl id={category.id} />}
                  </div>

                  {/* skills list */}
                  <ul className="skills__list">
                    {skills
                      .filter(v => v.category_id === category.id)
                      .map(skill => (
                        <SkillItem
                          key={skill.id}
                          skill={skill}
                          isadmin={isadmin}
                        />
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}

          {isadmin && (
            <>
              <AddCategory />
              <AddSkill />
            </>
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
  { getSkillsCategories, getSkills }
)(index);