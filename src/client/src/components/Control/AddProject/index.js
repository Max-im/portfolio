import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSkills } from "../../../store/actions/skills";
import "./style.scss";
import Input from "../../Common/Input";
import { addProject } from "../../../store/actions/projectes";
import SelectSkills from "../../Common/SelectSkills";

export class index extends Component {
  state = { picture: "", description: "", title: "" };

  componentDidMount() {
    if ((this.props.skills.skills.length = 0)) {
      this.props.getSkills();
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { picture, description, title } = this.state;
    const { id: author_id } = this.props.auth.user;
    this.props.addProject({ picture, description, title, author_id });
    this.setState({ picture: "", description: "", title: "" });
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    skills: PropTypes.object.isRequired,
    getSkills: PropTypes.func.isRequired
  };

  render() {
    const { isAuth, user } = this.props.auth;
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
              <SelectSkills />
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
