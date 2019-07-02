import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setRate } from "../../../store/actions/projectes";
import "./style.scss";

export class index extends Component {
  state = { error: null };

  onRate(sign) {
    const { id: project_id } = this.props.match.params;
    this.props.setRate({ project_id, sign });
  }

  static propTypes = {
    setRate: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    portfolio: PropTypes.object.isRequired
  };

  render() {
    const { project } = this.props.portfolio;
    const { isAuth, user } = this.props.auth;

    return (
      <section className="section rate">
        <h3 className="section__title">Rate</h3>
        {project && (
          <div className="rate__icons">
            {/* LIKES */}
            <i
              className={
                isAuth && project.likes.includes(user.id)
                  ? "fas fa-thumbs-up rate__icon rate__icon_active"
                  : "fas fa-thumbs-up rate__icon"
              }
              onClick={this.onRate.bind(this, true)}
            >
              {"-" + project.likes.length}
            </i>
            {/* DISLIKES */}
            <i
              className={
                isAuth && project.dislikes.includes(user.id)
                  ? "fas fa-thumbs-down rate__icon rate__icon_active"
                  : "fas fa-thumbs-down rate__icon"
              }
              onClick={this.onRate.bind(this, false)}
            >
              {"-" + project.dislikes.length}
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
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  { setRate }
)(withRouter(index));
