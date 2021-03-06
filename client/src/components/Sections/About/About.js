import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Contacts from './Contacts';
import Social from '../../Common/Social/Social';
import Spinner from '../../Common/Spinner';
import { getAbout } from '../../../store/actions/resume';
import '../../../sass/about.scss';

export class About extends Component {
  componentDidMount() {
    if (!this.props.about.isReady) {
      this.props.getAbout();
    }
  }

  render() {
    const { about, auth } = this.props;
    const show = about.isReady && !about.error;
    return (
      <section className="section section_colored about">
        <div className="container">
          <h3 className="section__title">
            About
            {auth.user && auth.user.isadmin && (
              <Link to="/admin/edit-about" className="section__editBtn fas fa-edit" />
            )}
          </h3>

          {show && (
            <div className="about__body">
              <div className="about__photoBlock">
                <div className="about__imgWrap">
                  <img src={'/photo/' + about.avatar} alt="my photo" className="about__img" />
                </div>
                <h5 className="about__name">
                  {about.name} {about.lastname}
                </h5>
                <Contacts contacts={about.contacts} />
                <div className="about__social">
                  <Social social={about.social} />
                </div>
              </div>

              <div className="about__summary">{about.summary}</div>
            </div>
          )}
        </div>
        {!show && <Spinner />}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  about: state.about,
  auth: state.auth,
});

export default connect(mapStateToProps, { getAbout })(About);
