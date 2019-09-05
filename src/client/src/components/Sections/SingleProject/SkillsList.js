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

          <ul className="aboutSingleProject__skillsList">
            {item.skills.map((skill, i) => (
              <li className="aboutSingleProject__skill" key={skill.id}>
                <p className="aboutSingleProject__skillTooltip">
                  {skill.title}
                </p>
                <img
                  src={`/photo/${skill.picture}`}
                  alt={skill.title}
                  className={
                    i >= step && i < 4 + step
                      ? "aboutSingleProject__skillImg aboutSingleProject__skillImg_shown "
                      : "aboutSingleProject__skillImg "
                  }
                  style={{
                    borderRight: i === 3 + step ? "1px solid #eee" : "none"
                  }}
                />
              </li>
            ))}
          </ul>
          <i
            className="fas fa-chevron-right aboutSingleProject__control aboutSingleProject__control_right"
            onClick={this.onStep.bind(this, 1)}
            style={{ fontSize: max ? 0 : "22px" }}
          />
        </div>
      </section>
    );
  }
}
