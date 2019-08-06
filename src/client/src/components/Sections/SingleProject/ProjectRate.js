import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setRate, getProjectRate } from "../../../store/actions/projectes";

export class index extends Component {
  state = { error: null };

  componentDidMount() {
    this.props.getProjectRate(this.props.match.params.id);
  }

  onRate(sign) {
    const { id: project_id } = this.props.match.params;
    this.props.setRate({ project_id, sign });
  }
  static propTypes = {
    setRate: PropTypes.func.isRequired,
    getProjectRate: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired
  };

  render() {
    const { likes, dislikes } = this.props.project;
    const { isAuth, user } = this.props.auth;

    return (
      <section className="section rate">
        <h3 className="section__title">Rate</h3>
        {likes && dislikes && (
          <div className="rate__icons">
            {/* LIKES */}
            <i
              className={
                isAuth && likes.includes(user.id)
                  ? "fas fa-thumbs-up rate__icon rate__icon_active"
                  : "fas fa-thumbs-up rate__icon"
              }
              onClick={this.onRate.bind(this, true)}
            >
              {"-" + likes.length}
            </i>

            {/* DISLIKES */}
            <i
              className={
                isAuth && dislikes.includes(user.id)
                  ? "fas fa-thumbs-down rate__icon rate__icon_active"
                  : "fas fa-thumbs-down rate__icon"
              }
              onClick={this.onRate.bind(this, false)}
            >
              {"-" + dislikes.length}
            </i>

            {this.state.error && (
              <p className="section__error">{this.state.error}</p>
            )}
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  project: state.project
});

export default connect(
  mapStateToProps,
  { setRate, getProjectRate }
)(withRouter(index));
