import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import { getEdu, removeEdu } from "../../../store/actions/education";
import EduItem from "../../Items/EduItem";

export class index extends Component {
  componentDidMount() {
    this.props.getEdu();
  }

  onEduDelete(id) {
    if (window.confirm("Are you sure?")) this.props.removeEdu(id);
  }

  static propTypes = {
    education: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getEdu: PropTypes.func.isRequired,
    removeEdu: PropTypes.func.isRequired
  };

  render() {
    const { edu, loading } = this.props.education;
    const { user, isAuth } = this.props.auth;

    return (
      <section className="section">
        <h3 className="section__title">Education</h3>

        <ul>
          {loading
            ? "Loading..."
            : edu.map(eduItem => (
                <li key={eduItem.id} className="edu">
                  {isAuth && user.isadmin && (
                    <i
                      className="fas fa-trash-alt edu__delete"
                      onClick={this.onEduDelete.bind(this, eduItem.id)}
                    />
                  )}
                  <EduItem eduItem={eduItem} />
                </li>
              ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  education: state.education,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getEdu, removeEdu }
)(index);
