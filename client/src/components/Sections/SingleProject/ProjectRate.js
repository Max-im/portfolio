import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setRate, getProjectRate } from "../../../store/actions/projects";

export class index extends Component {
  state = { error: null };

  componentDidMount() {
    this.props.getProjectRate(this.props.match.params.id);
  }

  onRate(sign) {
    const { id: project_id } = this.props.match.params;
    const { isAuth } = this.props.auth;
    if (!isAuth) return this.onLoginError();
    this.props.setRate({ project_id, sign });
  }

  onLoginError() {
    this.setState({ error: "You must login first!" });
    setTimeout(() => this.setState({ error: null }), 5000);
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
      <section className="section projectRate">
        <h3 className="section__title">Rate</h3>

        {likes && dislikes && (
          <div className="projectRate__icons">
            <div className="projectRate__item">
              {/* LIKES */}
              <i
                className={
                  isAuth && likes.includes(user.id)
                    ? "fas fa-thumbs-up projectRate__icon projectRate__icon_active"
                    : "fas fa-thumbs-up projectRate__icon"
                }
                onClick={this.onRate.bind(this, true)}
              />
              <p className="tooltip projectRate__tooltip">
                Like {likes.length}
              </p>
            </div>

            {/* DISLIKES */}
            <div className="projectRate__item">
              <i
                className={
                  isAuth && dislikes.includes(user.id)
                    ? "fas fa-thumbs-down projectRate__icon projectRate__icon_active"
                    : "fas fa-thumbs-down projectRate__icon"
                }
                onClick={this.onRate.bind(this, false)}
              />
              <p className="tooltip projectRate__tooltip">
                Dislike {dislikes.length}
              </p>
            </div>
          </div>
        )}
        {this.state.error && <p className="error">{this.state.error}</p>}
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
