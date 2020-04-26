import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Shown from '../../hoc/Shown';
import ProjectImg from './ProjectImg';
import ProjectAbout from './ProjectAbout';
import ProjectSkills from './ProjectSkills';
import Similar from './Similar';
// import Comments from './Comments';
// import ProjectRate from "./ProjectRate";

export class ProjectInfo extends Component {
  render() {
    const { project, auth } = this.props;
    return (
      <div className="project__info">
        {project && (
          <>
            <h2 className="project__title">
              {project.title}
              {auth.user && auth.user.isadmin && (
                <>
                  <Link
                    to={'/admin/edit-project/' + project.id}
                    className="section__editBtn fas fa-edit"
                  />
                  <i className="section__deleteBtn fas fa-trash-alt" />
                </>
              )}
            </h2>
            <ProjectImg project={project} />
            <Shown component={ProjectAbout} project={project} className="section project__about" />
            <Shown component={ProjectSkills} skills={project.skills} />
            <Shown component={Similar} similar={project.similar} />
            {/* <Comments comments={project.comments} /> */}
            {/* <ProjectRate /> */}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(ProjectInfo);
