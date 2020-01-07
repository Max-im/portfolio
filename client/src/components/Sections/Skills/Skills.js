import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSkills } from "../../../store/actions/resume";
import SkillItem from "./SkillItem";
import Spinner from "../../Common/Spinner";
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
    const { skills, categories, error } = this.props.skills;
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
                {/* <li data-filter="all" className="categories__item">
                  All
                </li> */}
                {categories.map(category => (
                  <li
                    key={category.name}
                    data-filter={
                      category.name === "All" ? "all" : ".cat" + category.name
                    }
                    className="categories__item"
                  >
                    {category.name}
                  </li>
                ))}
              </ul>

              <ul className="skills__list" ref={this.myRef}>
                {skills.map(skill => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </ul>
            </>
          )}

          {error && <p className="error skills__error">{error}</p>}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills,
  auth: state.auth
});

export default connect(mapStateToProps, { getSkills })(index);
