import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import Input from "../../Common/Input";
import { addProject } from "../../../store/actions/projectes";
import { getSkills } from "../../../store/actions/skills";

export class index extends Component {
  state = { picture: "", description: "", title: "", skills: [] };
  componentDidMount() {
    this.props.getSkills();
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
    const { picture, description, title, skills } = this.state;
    const { id: author_id } = this.props.auth.user;
    this.props.addProject({ picture, description, title, author_id, skills });
    this.setState({ picture: "", description: "", title: "", skills: [] });
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    skills: PropTypes.object.isRequired,
    getSkills: PropTypes.func.isRequired
  };

  render() {
    const { isAuth, user } = this.props.auth;
    const { loading, skills } = this.props.skills;
    return (
      <div>
        {isAuth && user.isadmin && (
          <>
            <h5>Add project</h5>
            <form className="addProject" onSubmit={this.onSubmit.bind(this)}>
              <Input
                name="picture"
                value={this.state.picture}
                onChange={this.onChange.bind(this)}
                clasName="addProject__input"
              />
              <Input
                name="title"
                value={this.state.title}
                onChange={this.onChange.bind(this)}
                clasName="addProject__input"
              />
              <Input
                name="description"
                value={this.state.description}
                onChange={this.onChange.bind(this)}
                clasName="addProject__input"
              />

              <ul className="addProject__skills">
                {!loading &&
                  Object.keys(skills).length > 0 &&
                  Object.keys(skills).map(category =>
                    skills[category].map(skill => (
                      <li
                        key={skill.id}
                        onClick={this.toggleSkill.bind(this, skill.id)}
                        className={
                          this.state.skills.includes(skill.id)
                            ? "addProject__skill addProject__skill_active"
                            : "addProject__skill"
                        }
                      >
                        <img src={skill.skill_picture} alt={skill.skill} />
                      </li>
                    ))
                  )}
              </ul>

              <button type="submit">Add project</button>
            </form>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { getSkills, addProject }
)(index);
