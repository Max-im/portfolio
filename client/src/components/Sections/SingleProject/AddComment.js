import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createComment } from "../../../store/actions/projects";

export class index extends Component {
  state = { commentText: "" };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    createComment: PropTypes.func.isRequired
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onAddComment(e) {
    e.preventDefault();
    const { commentText: text } = this.state;
    const { id: project_id } = this.props.match.params;
    const { id: author_id } = this.props.auth.user;
    this.props.createComment({ text, project_id, author_id });
    this.setState({ commentText: "" });
  }

  render() {
    const { user } = this.props.auth;
    return (
      <form className="addComment" onSubmit={this.onAddComment.bind(this)}>
        <textarea
          onChange={this.onChange.bind(this)}
          name="commentText"
          id="commentText"
          placeholder="Add comment"
          cols="30"
          rows="7"
          value={this.state.commentText}
          className="addComment__textArea"
        />
        <button className="addComment__btn" type="submit">
          <img
            src={user.avatar}
            alt={user.name}
            className="addComment__avatar"
          />
          <i className="far fa-comment addComment__icon" />
          Add Comment
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  { createComment }
)(withRouter(index));
