import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { getProjectComments } from "../../../store/actions/projectes";

export class index extends Component {
  state = { step: 1 };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.getComments();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prev) {
    if (prev.project.comments.length !== this.props.project.comments.length)
      this.setState({ step: this.state.step - 0 + 1 });
  }

  handleScroll = () => {
    if (
      Math.round(document.documentElement.scrollTop + window.innerHeight) >
      document.documentElement.scrollHeight - 75
    )
      this.getComments();
  };

  getComments() {
    const { loadComments } = this.props.project;
    if (loadComments) return;
    const { id } = this.props.match.params;
    this.props.getProjectComments(id, this.state.step);
  }

  static propTypes = {
    getProjectComments: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isAuth, user } = this.props.auth;
    const { comments, loading } = this.props.project;
    const isReady = comments.length > 0;
    return (
      <section className="section projectComments">
        <h3 className="section__title">Comments</h3>
        {!loading && (
          <>
            {isAuth && <AddComment />}
            {isReady && (
              <ul>
                {comments.map(comment => (
                  <Comment comment={comment} key={comment.id} user={user} />
                ))}
              </ul>
            )}
          </>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProjectComments }
)(withRouter(index));
