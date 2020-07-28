import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import SimilarProject from './SimilarProject';
import { getProjectRecommendations } from '../../../store/actions/projects';

export class Recommendations extends Component {
  componentDidMount() {
    const { id } = this.props.project.project;
    this.props.getProjectRecommendations(id);
  }

  render() {
    const { recommendations } = this.props.project;
    const { device } = this.props.common;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      centerPadding: '30px',
      dotsClass: 'slick-dots project__sliderDots',
    };

    const recLen = recommendations ? recommendations.length : 1;
    if (device === 'tablet') {
      settings.slidesToShow = recLen > 3 ? 3 : recLen;
      settings.dots = true;
    } else if (device === 'desctop') {
      settings.slidesToShow = recLen > 5 ? 5 : recLen;
      settings.dots = true;
    }

    return (
      <section className='section'>
        {recommendations && (
          <>
            <h3 className='project__subtitle'>Similar Projects</h3>
            <Slider {...settings}>
              {recommendations.map((recomendProject) => (
                <SimilarProject project={recomendProject} key={recomendProject.id} />
              ))}
            </Slider>
          </>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.project,
  common: state.common,
});

export default connect(mapStateToProps, { getProjectRecommendations })(Recommendations);
