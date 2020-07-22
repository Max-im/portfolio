import React, { Component } from 'react';
import { connect } from 'react-redux';
import Social from '../Common/Social/Social';
import { getAbout } from '../../store/actions/resume';
import '../../sass/home.scss';
import homeBg from '../../assets/homebg.jpg';

class Home extends Component {
  componentDidMount() {
    if (!this.props.about.isReady) {
      this.props.getAbout();
    }
  }

  render() {
    const { isReady, social, title, name, lastname } = this.props.about;
    return (
      <div className='page home'>
        <div className='home__bg' style={{ 'background-image': `url(${homeBg})` }}></div>
        <div className='home__left'>
          <div className='home__bottom' />
          {isReady && (
            <>
              <p className='home__name'>{name}</p>
              <p className='home__lastname'>{lastname}</p>
              <p className='home__title'>{title}</p>
              <div className='home__social'>
                <Social social={social} />
              </div>
            </>
          )}
        </div>
        <div className='home__right'>
          <div className='home__top' />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  about: state.about,
});

export default connect(mapStateToProps, { getAbout })(Home);
