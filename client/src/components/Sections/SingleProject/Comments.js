import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import { getComments } from '../../../store/actions/projects';
import '../../../sass/comments.scss';

export class Comments extends Component {
  componentDidMount() {
    this.props.getComments(this.props.project.project.id);
  }

  render() {
    const { comments } = this.props.project;

    return (
      <div className="comments">
        <h3 className="project__subtitle">Comments</h3>
        {comments && comments.length === 0 && <p>There is no comments yet</p>}
        {comments && comments.length > 0 && (
          <ul>
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getComments })(Comments);
