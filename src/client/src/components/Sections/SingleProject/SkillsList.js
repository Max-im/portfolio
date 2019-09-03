import React, { Component } from "react";

export default class SkillsList extends Component {
  state = { step: 0 };

  onStep(val) {
    const { item } = this.props;
    const { step } = this.state;
    const min = step <= 0;
    const max = step + 4 >= item.skills.length;
    if (val < 0 && min) return;
    if (val > 0 && max) return;
    this.setState({ step: step + val });
  }

  render() {
    const { item } = this.props;
    const { step } = this.state;
    const min = step <= 0;
    const max = step + 4 >= item.skills.length;
    return (
      <section className="section">
        <h3 className="section__title">Skills</h3>
        <p>There are {item.skills.length} skills in the project</p>
        <div className="aboutSingleProject__skills">
          <i
            className="fas fa-chevron-left aboutSingleProject__control"
            onClick={this.onStep.bind(this, -1)}
            style={{ fontSize: min ? 0 : "22px" }}
          />

          <div className="aboutSingleProject__skillsWrap">
            <ul
              className="aboutSingleProject__skillsList"
              style={{ left: -60 * step }}
            >
              {item.skills.map(skill => (
                <li className="aboutSingleProject__skill" key={skill.id}>
                  <p className="aboutSingleProject__skillTooltip">
                    {skill.title}
                  </p>
                  <img
                    src={`/photo/${skill.picture}`}
                    alt={skill.title}
                    className="aboutSingleProject__skillImg"
                  />
                </li>
              ))}
            </ul>
          </div>
          <i
            className="fas fa-chevron-right aboutSingleProject__control"
            onClick={this.onStep.bind(this, 1)}
            style={{ fontSize: max ? 0 : "22px" }}
          />
        </div>
      </section>
    );
  }
}
