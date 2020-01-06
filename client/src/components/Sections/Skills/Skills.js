import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSkills, getSkillsCategories } from "../../../store/actions/skills";
import SkillItem from "./SkillItem";
import AddCategory from "./AddCategory";
import AddSkill from "./AddSkill";
import Spinner from "../../Common/Spinner";
import Category from "./Category";
import CategoryControl from "./CategoryControl";
import "./style.scss";
import mixitup from "mixitup";

export class index extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = { catIds: [] };

  componentDidMount() {
    this.props.getSkills();
    this.props.getSkillsCategories();
  }

  componentDidUpdate(prev) {
    if (!prev.skills.categories && this.props.skills.categories) {
      const catIds = this.props.skills.categories.map(i => i.id);
      this.setState({ catIds });
    }
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
    if (this.myRef.current) {
      mixitup(this.myRef.current);
    }

    return (
      <section className="section skills">
        <div className="container">
          <h3 className="section__title">Skills</h3>

          {categories && skills && (
            <>
              <ul className="categories">
                <li data-filter="all" className="categories__item">
                  All
                </li>
                {categories.map(category => (
                  <Category key={category.id} category={category} />
                ))}
              </ul>

              <ul className="skills__list" ref={this.myRef}>
                {skills.map(skill => (
                  <SkillItem key={skill.id} skill={skill} isadmin={isadmin} />
                ))}
              </ul>
            </>
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

export default connect(mapStateToProps, { getSkillsCategories, getSkills })(
  index
);
