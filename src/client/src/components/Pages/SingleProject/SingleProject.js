import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./style.scss";
import PageTitle from "../../Common/PageTitle";
import SingleCommon from "../../Sections/SingleProject/SingleCommon";
import SingleControl from "../../Sections/SingleProject/SingleControll";
import ProjectRate from "../../Sections/SingleProject/ProjectRate";
import Comments from "../../Sections/SingleProject/Comments";

export class SingleProject extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  };

  render() {
    const { project } = this.props.project;
    return (
      <div className="page">
        {project && (
          <PageTitle
            text={project.title}
            subtext="Single project information"
          />
        )}
        <div className="container">
          <SingleCommon />
          {/* TODO aside similar */}
          <SingleControl />
          <ProjectRate />
          <Comments />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps)(SingleProject);
