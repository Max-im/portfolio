import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Shown from '../../hoc/Shown';
import ProjectImg from './ProjectImg';
import ProjectAbout from './ProjectAbout';
import ProjectSkills from './ProjectSkills';
import Recommendations from './Recommendations';
// import Comments from './Comments';
// import ProjectRate from "./ProjectRate";

export class ProjectInfo extends Component {
  render() {
    const { project, auth } = this.props;
    return (
      <div className="project__info">
        {project && (
          <>
            <h2 className="section__title">
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
            <div className="project__main">
              <ProjectImg project={project} />
              <ProjectAbout project={project} />
            </div>
            <Shown component={ProjectSkills} skills={project.skills} />
            <Shown component={Recommendations} />
            {/* <Comments comments={project.comments} /> */}
            {/* <ProjectRate /> */}
            <div style={{height: '50px'}}></div>
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
