import React, { Component } from "react";

export default class ProjectSkills extends Component {
  state = { step: 0 };

  onStep(val) {
    const { project } = this.props;
    const { step } = this.state;
    const min = step <= 0;
    const max = step + 4 >= project.skills.length;
    if (val < 0 && min) return;
    if (val > 0 && max) return;
    this.setState({ step: step + val });
  }

  render() {
    const { project } = this.props;
    const { step } = this.state;
    const min = step <= 0;
    const max = step + 4 >= project.skills.length;
    return (
      <section className="section projectSkills">
        <h3 className="section__title">Project Skills</h3>
        <p>There are {project.skills.length} skills in the project</p>
        <div className="projectSkills__skills">
          <i
            className="fas fa-chevron-left projectSkills__control"
            onClick={this.onStep.bind(this, -1)}
            style={{ fontSize: min ? 0 : "22px" }}
          />

          <ul className="projectSkills__skillsList">
            {project.skills.map((skill, i) => (
              <li className="projectSkills__skill" key={skill.id}>
                <p className="projectSkills__skillTooltip">{skill.title}</p>
                <img
                  src={`/photo/${skill.picture}`}
                  alt={skill.title}
                  className={
                    i >= step && i < 4 + step
                      ? "projectSkills__skillImg projectSkills__skillImg_shown "
                      : "projectSkills__skillImg "
                  }
                  style={{
                    borderRight: i === 3 + step ? "1px solid #eee" : "none"
                  }}
                />
              </li>
            ))}
          </ul>
          <i
            className="fas fa-chevron-right projectSkills__control projectSkills__control_right"
            onClick={this.onStep.bind(this, 1)}
            style={{ fontSize: max ? 0 : "22px" }}
          />
        </div>
      </section>
    );
  }
}
