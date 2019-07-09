import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PageTitle from "../../Common/PageTitle";
import "./style.scss";
import { getProject, updateProject } from "../../../store/actions/projectes";
import Input from "../../Common/Input";
import SelectSkills from "../../Common/SelectSkills";
import Spinner from "../../Common/Spinner";

export class index extends Component {
  state = { title: "", description: "", picture: "", skills: [] };

  componentDidMount() {
    if (this.props.portfolio.project) this.initState();
    else {
      const { id: project_id } = this.props.match.params;
      this.props.getProject(project_id);
    }
  }

  componentDidUpdate(prev) {
    if (!prev.portfolio.project && this.props.portfolio.project) {
      this.initState();
    }
  }

  initState() {
    const { project } = this.props.portfolio;
    const { title, description, picture, skills, github, deploy } = project;
    const s = skills.map(item => item.id);
    this.setState({ title, description, picture, skills: s, github, deploy });
  }

  toggleSkill(id) {
    const current = this.state.skills;
    let newSkills;
    if (current.includes(id)) newSkills = current.filter(item => item !== id);
    else newSkills = [...current, id];
    this.setState({ skills: newSkills });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { id: project_id } = this.props.match.params;
    this.props.updateProject({ ...this.state, project_id }, this.props.history);
  }

  static propTypes = {
    portfolio: PropTypes.object.isRequired,
    getProject: PropTypes.func.isRequired,
    updateProject: PropTypes.func.isRequired
  };

  render() {
    const { project, loading, error } = this.props.portfolio;

    return (
      <div className="page">
        <PageTitle text="Update project" />
        <div className="container">
          {project && (
            <form onSubmit={this.onSubmit.bind(this)} className="updateProject">
              {Object.keys(this.state)
                .filter(key => key !== "skills")
                .map(key => (
                  <Input
                    key={key}
                    name={key}
                    value={this.state[key]}
                    clasName="updateProject__input"
                    onChange={this.onChange.bind(this)}
                  />
                ))}

              <SelectSkills
                stateSkills={this.state.skills}
                toggleSkill={this.toggleSkill.bind(this)}
              />

              <button className="updateProject__btn" type="submit">
                Save project data
              </button>
            </form>
          )}

          {error && <p className="error">{error}</p>}
          {loading && <Spinner />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  { getProject, updateProject }
)(withRouter(index));
