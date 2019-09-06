import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./style.scss";
import { getProject } from "../../../store/actions/projectes";
import PageTitle from "../../Common/PageTitle";
import ProjectImg from "../../Sections/SingleProject/SingleImage";
import SingleCommon from "../../Sections/SingleProject/SingleCommon";
import SingleControl from "../../Sections/SingleProject/SingleControll";
import ProjectRate from "../../Sections/SingleProject/ProjectRate";
import Comments from "../../Sections/SingleProject/Comments";
import ProjectSkills from "../../Sections/SingleProject/ProjectSkills";

export class SingleProject extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id);
  }

  static propTypes = {
    project: PropTypes.object.isRequired,
    getProject: PropTypes.func.isRequired
  };

  render() {
    const { project } = this.props.project;
    return (
      <div className="page">
        {project && (
          <div className="container singleProject">
            <PageTitle
              text={project.title}
              subtext="Single project information"
            />
            <ProjectImg project={project} />
            <SingleCommon project={project} />
            {/* TODO aside similar */}
            <ProjectSkills project={project} />
            {/* TODO make stateless component */}
            <ProjectRate />
            <SingleControl />
            <Comments />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project
});

export default connect(
  mapStateToProps,
  { getProject }
)(SingleProject);
