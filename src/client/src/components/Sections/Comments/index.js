import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import Comment from "../../Items/Comment";

export class index extends Component {
  static propTypes = {
    portfolio: PropTypes.object.isRequired
  };

  render() {
    const { project, loading } = this.props.portfolio;
    const isReady = project && !loading;
    return (
      <section className="section">
        <h3 className="section__title">comments</h3>
        {!isReady ? (
          "loading..."
        ) : (
          <ul>
            {project.comments.map(comment => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </ul>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(mapStateToProps)(index);
