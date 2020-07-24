import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageTitle from '../Common/PageTitle';
import Breadcrumbs from '../Sections/Breadcrumbs/Breadcrumbs';
import ProjectInfo from '../Sections/SingleProject/ProjectInfo';
import Spinner from '../Common/Spinner';
import { getProject } from '../../store/actions/projects';
import '../../sass/project.scss';

export class SingleProject extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id);
  }

  componentDidUpdate(prev) {
    const { id } = this.props.match.params;
    const { id: prevId } = prev.match.params;
    if (id !== prevId) {
      this.props.getProject(id);
    }
  }

  static propTypes = {
    project: PropTypes.object.isRequired,
    getProject: PropTypes.func.isRequired,
  };

  render() {
    const { project, isReady, error } = this.props.project;
    const show = project && isReady && !error;
    if (show && !project.id) {
      window.location.replace('/not-found');
    }
    return (
      <div className='page'>
        <PageTitle text='Project' subtext='Single project information' />
        <Breadcrumbs arr={['home', 'portfolio', 'project']} />
        <div className='container project'>
          {show && <ProjectInfo project={project} />}
          {!show && <Spinner />}
          {error && <p className='error'>{error}</p>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getProject })(withRouter(SingleProject));
