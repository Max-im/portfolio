import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import Input from "../../Common/Input";
import { createProject } from "../../../store/actions/projectes";
import SelectSkills from "../../Common/SelectSkills";

const initState = {
  picture: "",
  description: "",
  title: "",
  skills: [],
  github: "",
  deploy: ""
};

export class index extends Component {
  state = { ...initState };

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
    const { id: author_id } = this.props.auth.user;
    this.props.createProject({ ...this.state, author_id });
    this.setState({ ...initState });
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    skills: PropTypes.object.isRequired,
    createProject: PropTypes.func.isRequired
  };

  render() {
    const { isAuth, user } = this.props.auth;
    return (
      <div>
        {isAuth && user.isadmin && (
          <>
            <h5>Add project</h5>
            <form className="addProject" onSubmit={this.onSubmit.bind(this)}>
              {Object.keys(this.state)
                .filter(key => key !== "skills")
                .map(key => (
                  <Input
                    key={key}
                    name={key}
                    value={this.state[key]}
                    onChange={this.onChange.bind(this)}
                    clasName="addProject__input"
                  />
                ))}

              <SelectSkills
                stateSkills={this.state.skills}
                toggleSkill={this.toggleSkill.bind(this)}
              />

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
  { createProject }
)(index);
