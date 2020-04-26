import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EduItem from './EduItem';
import Spinner from '../../Common/Spinner';
import { getEducation } from '../../../store/actions/resume';
import '../../../sass/education.scss';

export class Education extends Component {
  componentDidMount() {
    if (!this.props.education.isReady) {
      this.props.getEducation();
    }
  }

  static propTypes = {
    education: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getEducation: PropTypes.func.isRequired,
  };

  render() {
    const { list, isReady, error } = this.props.education;
    const { auth } = this.props;
    const show = isReady && !error;
    return (
      <section className="edu">
        <div className="container">
          <h3 className="section__title">
            Education
            {auth.user && auth.user.isadmin && (
              <Link to="/admin/edit-education" className="section__editBtn fas fa-edit" />
            )}
          </h3>

          <ul className="edu__list">
            {show && list.map((edu) => <EduItem key={edu.id} edu={edu} />)}
          </ul>

          {!show && <Spinner />}
          {error && <p className="error">{error}</p>}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  education: state.education,
  auth: state.auth,
});

export default connect(mapStateToProps, { getEducation })(Education);
