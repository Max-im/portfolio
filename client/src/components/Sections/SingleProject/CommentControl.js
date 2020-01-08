import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteComment } from "../../../store/actions/projects";

export class index extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired
  };

  render() {
    const { user } = this.props.auth;
    const { comment } = this.props;
    return (
      <div>
        {(comment.author_id === user.id || user.isadmin) && (
          <i
            className="fas fa-trash-alt btn btn__delete comment__delete"
            onClick={this.props.deleteComment.bind(this, comment.id)}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(index);
