import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpItem from './ExpItem';
import Spinner from '../../Common/Spinner';
import { getExperience } from '../../../store/actions/resume';
import '../../../sass/experience.scss';

export class index extends Component {
  componentDidMount() {
    if (!this.props.experience.isReady) {
      this.props.getExperience();
    }
  }

  static propTypes = {
    experience: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getExperience: PropTypes.func.isRequired,
  };

  render() {
    const { list, error, isReady } = this.props.experience;
    const { auth } = this.props;
    const show = isReady && !error;
    return (
      <section className="exp">
        <div className="container">
          <h3 className="section__title">
            Experience
            {auth.user && auth.user.isadmin && (
              <Link to="/admin/edit-experience" className="section__editBtn fas fa-edit" />
            )}
          </h3>

          <ul className="exp__list">
            {show && list.map((exp) => <ExpItem key={exp.id} exp={exp} />)}
          </ul>

          {!show && <Spinner />}
          {error && <p className="error">{error}</p>}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  experience: state.experience,
  auth: state.auth,
});

export default connect(mapStateToProps, { getExperience })(index);
