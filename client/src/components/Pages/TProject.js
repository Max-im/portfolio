import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProject } from '../../store/actions/projects';

export class TProject extends Component {
  componentDidMount() {
    console.log('mount');
    const { id } = this.props.match.params;
    console.log(id);
    this.props.getProject(id);
  }

  componentDidUpdate(prev) {
    console.log('update');
    const { id } = this.props.match.params;
    console.log(id);
    const { id: prevId } = prev.match.params;
    if (id !== prevId) {
      this.props.getProject(id);
    }
  }
  render() {
    return <div>project</div>;
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { getProject })(withRouter(TProject));
