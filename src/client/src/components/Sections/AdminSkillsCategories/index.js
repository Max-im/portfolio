import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import { getSkillsCategories } from "../../../store/actions/skills";

export class index extends Component {
  componentDidMount() {
    this.props.getSkillsCategories();
  }

  static propTypes = {
    getSkillsCategories: PropTypes.func.isRequired,
    skills: PropTypes.object.isRequired
  };

  render() {
    const { categories } = this.props.skills;
    return (
      <section className="section">
        <h3 className="section__title">Skills categories</h3>
        {categories && (
          <div>
            <ul>
              <li className="skillsCat__item">
                <p>Category</p>
                <p>Range</p>
                <p>Delete</p>
              </li>
              {categories.map(item => (
                <li key={item.category} className="skillsCat__item">
                  <p>{item.category}</p>
                  <p>{item.range}</p>
                  <i className="fas fa-trash-alt" />
                </li>
              ))}
            </ul>
            <p>add category</p>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { getSkillsCategories }
)(index);
