import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimilarProject from './SimilarProject';
import Carousel from '../../hoc/Carousel';
import { getProjectRecommendations } from '../../../store/actions/projects';

export class Recommendations extends Component {
  componentDidMount() {
    const { id } = this.props.project.project;
    this.props.getProjectRecommendations(id);
  }

  render() {
    const { recommendations } = this.props.project;
    return (
      <section className="section">
        {recommendations && (
          <>
            <h3 className="project__subtitle">Similar Projects</h3>
            <Carousel arr={recommendations} item={SimilarProject} number="3" />
          </>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getProjectRecommendations })(Recommendations);
