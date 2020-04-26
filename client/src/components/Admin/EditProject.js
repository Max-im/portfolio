import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Input from '../Common/Input';
import InputPic from '../Common/InputPic';
import DatePicker from '../Common/DatePicker';
import SelectOne from '../Common/SelectOne';
import { getProject } from '../../store/actions/projects';
import { getSkills } from '../../store/actions/resume';
import { updateProjectData } from '../../store/actions/admin';
import '../../sass/admin.scss';

export class EditProject extends Component {
  state = {
    title: '',
    description: '',
    date: '',
    level: '',
    skills: [],
    picture: '',
    levels: ['best', 'medium', 'simple'],
    skillsList: [],
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (!this.props.project.project || this.props.project.project.id.toString() !== id.toString()) {
      this.props.getProject(id);
    } else if (
      this.props.project.project &&
      this.props.project.project.id.toString() === id.toString()
    ) {
      this.initState();
    }
    if (!this.props.skills.isReady) {
      this.props.getSkills();
    }
  }

  componentDidUpdate(prev) {
    if (!prev.project.project && this.props.project.project) {
      this.initState();
    }
    if (!prev.skills.isReady && this.props.skills.isReady) {
      this.setState({ skillsList: this.props.skills.skills });
    }
  }

  initState = () => {
    const { project } = this.props.project;
    this.setState({
      title: project.title,
      description: project.description,
      date: project.date,
      level: project.level,
      skills: project.skills.map((skill) => skill.id),
      picture: project.picture,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSelectSkill(skillId) {
    let updated = [...this.state.skills];
    if (this.state.skills.indexOf(skillId) === -1) {
      updated.push(skillId);
    } else {
      updated = updated.filter((id) => id !== skillId);
    }
    this.setState({ skills: updated });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const params = {};
    const skills = {};
    const { project } = this.props.project;
    const { state } = this;
    if (project.title !== state.title) params.title = state.title;
    if (project.description !== state.description) params.description = state.description;
    if (project.date !== state.date) params.date = state.date;
    if (project.level !== state.level) params.level = state.level;

    const currentSkillIds = project.skills.map((s) => s.id);
    if (JSON.stringify(currentSkillIds) !== JSON.stringify(state.skills)) {
      skills.newSkills = state.skills.filter((skill) => currentSkillIds.indexOf(skill) === -1);
      skills.deletedSkills = currentSkillIds.filter((skill) => state.skills.indexOf(skill) === -1);
    }
    console.log(skills.deletedSkills, 'skills.deletedSkills');
    if (!Object.keys(params).length && !Object.keys(skills).length) return;
    this.props.updateProjectData(this.props.match.params.id, params, skills);
  };

  render() {
    return (
      <div className="container section">
        <h3 className="section__title">Edit Project</h3>
        <form onSubmit={this.onSubmit}>
          <InputPic name="picture" value={this.state.picture} />
          <Input onChange={this.onChange} value={this.state.title} name="title" />
          <DatePicker onChange={this.onChange} init={this.state.date} name="date" />
          <Input
            onChange={this.onChange}
            value={this.state.description}
            name="description"
            type="textarea"
          />
          <SelectOne
            name="level"
            arr={this.state.levels}
            onChange={this.onChange}
            value={this.state.level}
          />

          <div className="admin__row">
            <label>
              <h5 className="input__title">skills</h5>
              {this.state.skills.length && this.state.skillsList.length && (
                <ul className="admin__skillList">
                  {this.state.skillsList.map((s) => (
                    <li
                      className={
                        this.state.skills.indexOf(s.id) > -1
                          ? 'admin__skillItem admin__skillItem_active'
                          : 'admin__skillItem'
                      }
                      onClick={() => this.onSelectSkill(s.id)}
                      key={s.id}
                    >
                      <img alt={s.name} className="admin__skillIcon" src={'/photo/' + s.icon} />
                    </li>
                  ))}
                </ul>
              )}
            </label>
          </div>

          <button type="submit" className="admin__submitBtn btn btn_active">
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.project,
  skills: state.skills,
});

export default connect(mapStateToProps, { getProject, getSkills, updateProjectData })(
  withRouter(EditProject)
);
