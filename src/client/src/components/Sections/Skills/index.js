import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSkills } from "../../../store/actions/skills";
import "./style.scss";

export class index extends Component {
  componentDidMount() {
    this.props.getSkills();
  }

  static propTypes = {
    skills: PropTypes.object.isRequired,
    getSkills: PropTypes.func.isRequired
  };

  render() {
    const { skills, loading } = this.props.skills;
    const categories = skills
      .map(item => item.category)
      .filter((v, i, a) => a.indexOf(v) === i);

    return (
      <section className="section">
        <h3 className="section__title">Skills</h3>

        {/* <ul>
          {loading
            ? "Loading..."
            : categories.map(category => (
                <li key={category}>
                  <h5>{category}</h5>
                  <ul>
                    {skills
                      .filter(item => item.category === category)
                      .map(item => (
                        <li key={item.id}>
                          <img src={item.picture} alt={item.skill} />
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
        </ul> */}

        <ul>
          {loading
            ? "Loading..."
            : skills.map((item, i) => (
                <li key={item.id}>
                  {skills[i + 1] &&
                    skills[i + 1].category !== item.category && (
                      <h5>{item.category}</h5>
                    )}
                  <img src={item.picture} alt={item.skill} />
                </li>
              ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { getSkills }
)(index);
