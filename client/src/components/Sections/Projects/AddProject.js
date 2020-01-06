import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Input from "../../Common/Input";
import { createProject } from "../../../store/actions/projectes";
import SelectSkills from "../../Common/SelectSkills";
import Select from "../../Common/Select";

const initState = {
  picture: "",
  description: "",
  level_id: 1,
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

  onUploadFile(e) {
    this.setState({ picture: e.target.files[0] });
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
    const { isadmin } = this.props.auth.user;
    return (
      <div>
        {isadmin && (
          <>
            <h5>Add project</h5>
            <form className="addProject" onSubmit={this.onSubmit.bind(this)}>
              <input
                type="file"
                name="picture"
                onChange={this.onUploadFile.bind(this)}
              />

              <Input
                name="description"
                value={this.state.description}
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
                name="github"
                value={this.state.github}
                onChange={this.onChange.bind(this)}
                clasName="addProject__input"
              />
              <Input
                name="deploy"
                value={this.state.deploy}
                onChange={this.onChange.bind(this)}
                clasName="addProject__input"
              />

              <SelectSkills
                stateSkills={this.state.skills}
                toggleSkill={this.toggleSkill.bind(this)}
              />

              <Select
                str="value"
                onChange={this.onChange.bind(this)}
                name="level_id"
                selected={this.state.level_id}
                arr={[
                  { value: "Best", id: 1 },
                  { value: "Medium", id: 2 },
                  { value: "Simple", id: 3 }
                ]}
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
