import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onCreateComment } from '../../../store/actions/projects';

export class CreateComment extends Component {
  state = {
    text: '',
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      text: this.state.text,
      userId: this.props.auth.user.id,
      projectId: this.props.projectId,
    };
    this.props.onCreateComment(payload);
    this.setState({ text: '' });
  };

  render() {
    const { user } = this.props.auth;
    const {createCommentError} = this.props.project;
    return (
      <>
        {user && (
          <form onSubmit={this.onSubmit} className="comment__addBlock">
            <textarea
              name="text"
              onChange={this.onChange}
              rows="10"
              value={this.state.text}
              className="comment__createInput"
              placeholder="Type your comment"
            />
            <div>
              <button className="project__btn" type="submit">
                Add Comment
              </button>
            </div>
            {createCommentError && <p className="error">{createCommentError}</p>}
          </form>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  project: state.project
});

export default connect(mapStateToProps, { onCreateComment })(CreateComment);
