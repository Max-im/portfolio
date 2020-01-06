import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contacts from './Contacts';
import Social from '../../Common/Social/Social';
import { getAbout } from '../../../store/actions/resume';
import '../../../sass/about.scss';

export class About extends Component {
  componentDidMount() {
    this.props.getAbout();
  }

  render() {
    const { avatar, name, lastName, summary, social, isReady } = this.props.about;
    return (
      <section className="section about">
        <div className="container">
          <h3 className="section__title">About</h3>
          {isReady && (
            <div className="about__body">
              <div className="about__photoBlock">
                <div className="about__imgWrap">
                  <img src={'/photo/' + avatar} alt="my photo" className="about__img" />
                </div>
                <h5 className="about__name">
                  {name} {lastName}
                </h5>
                <Contacts />
                <Social social={social} />
              </div>
              
              <div className="about__describeBlock">
                {summary}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  about: state.about
});

export default connect(mapStateToProps, { getAbout })(About);
