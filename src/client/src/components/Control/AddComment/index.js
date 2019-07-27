import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./style.scss";
import { createComment } from "../../../store/actions/comments";

export class index extends Component {
  state = { commentText: "" };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    createComment: PropTypes.func.isRequired
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onAddComment() {
    const { commentText: text } = this.state;
    const { id: project_id } = this.props.match.params;
    const { id: author_id } = this.props.auth.user;
    this.props.createComment({ text, project_id, author_id });
    this.setState({ commentText: "" });
  }

  render() {
    const { isAuth, user } = this.props.auth;
    return (
      <div>
        <h5>Add Comment</h5>
        <div className="addComment">
          <div className="addComment__user">
            <img
              src={user.avatar}
              alt={user.name}
              className="addComment__avatar"
            />
            <p className="addComment__name">{user.name}</p>
          </div>
          <textarea
            onChange={this.onChange.bind(this)}
            name="commentText"
            id="commentText"
            cols="30"
            rows="7"
            value={this.state.commentText}
            className="addComment__textArea"
          />
          <i
            className="far fa-comment addComment__btn"
            onClick={this.onAddComment.bind(this)}
          >
            {" "}
            Add Comment
          </i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  { createComment }
)(withRouter(index));
