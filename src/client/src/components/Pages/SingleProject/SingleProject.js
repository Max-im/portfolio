import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProject } from "../../../store/actions/projectes";
import PageTitle from "../../Common/PageTitle";
import ProjectImg from "../../Sections/SingleProject/SingleImage";
import ProjectAbout from "../../Sections/SingleProject/ProjectAbout";
import SingleControl from "../../Sections/SingleProject/SingleControll";
import ProjectRate from "../../Sections/SingleProject/ProjectRate";
import Comments from "../../Sections/SingleProject/Comments";
import ProjectSkills from "../../Sections/SingleProject/ProjectSkills";
import Breadcrumbs from "../../Sections/Breadcrumbs/Breadcrumbs";

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
    const breadcrumbs = ["home", "portfolio", "project"];
    return (
      <div className="page">
        <div className="container singleProject">
          {project && (
            <>
              <PageTitle
                text={project.title}
                subtext="Single project information"
              />
              <Breadcrumbs arr={breadcrumbs} />
              <ProjectImg project={project} />
              <ProjectAbout project={project} />
              <ProjectSkills project={project} />
            </>
          )}

          {/* TODO aside similar */}
          {/* TODO make stateless component */}
          <ProjectRate />
          <SingleControl />
          <Comments />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, { getProject })(SingleProject);
