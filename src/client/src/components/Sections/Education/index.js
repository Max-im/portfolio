import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import { getEdu, deleteEdu } from "../../../store/actions/education";
import EduItem from "../../Items/EduItem";
import Spinner from "../../Common/Spinner";

export class index extends Component {
  componentDidMount() {
    this.props.getEdu();
  }

  onEduDelete(id) {
    if (window.confirm("Are you sure?")) this.props.deleteEdu(id);
  }

  static propTypes = {
    education: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getEdu: PropTypes.func.isRequired,
    deleteEdu: PropTypes.func.isRequired
  };

  render() {
    const { edu, loading, error } = this.props.education;
    const { user } = this.props.auth;

    return (
      <section className="section">
        <div className="container">
          <h3 className="section__title">Education</h3>

          {edu && (
            <ul>
              {edu.map(eduItem => (
                <EduItem
                  key={eduItem.id}
                  eduItem={eduItem}
                  onEduDelete={this.onEduDelete.bind(this)}
                  isadmin={user.isadmin}
                />
              ))}
            </ul>
          )}

          {error && <p className="error">{error}</p>}
          {loading && <Spinner />}
        </div>
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
  { getEdu, deleteEdu }
)(index);
