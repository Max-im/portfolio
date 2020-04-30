import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRate } from '../../../store/actions/projects';

export class Rate extends Component {
  onUpdateRate(vote) {
    this.props.updateRate(vote, this.props.project.project.id, this.props.auth.isAuth);
  }

  render() {
    const { positive, negative } = this.props.project.rate;
    const { rateError: error } = this.props.project;
    let isPositiveActive = false;
    let isNegativeActive = false;
    if (this.props.auth.user) {
      const { id } = this.props.auth.user;
      isPositiveActive = positive.find((item) => item.userid.toString() === id.toString());
      isNegativeActive = negative.find((item) => item.userid.toString() === id.toString());
    }
    return (
      <div className="pageAside__block">
        <h4 className="pageAside__title">
          Rate: <b className="project__rateValue">{}</b>
        </h4>
        <ul className="project__rate">
          <li key="positive" className="social__item project__rateItem">
            <i
              className={
                isPositiveActive
                  ? 'fas fa-thumbs-up social__link project__rateIcon project__rateIcon_positive'
                  : 'fas fa-thumbs-up social__link project__rateIcon'
              }
              onClick={() => this.onUpdateRate(true)}
            />
            <span className="project__rateLen">{positive.length}</span>
            <p className="social__tooltip">like</p>
          </li>
          <li key="negative" className="social__item project__rateItem">
            <i
              className={
                isNegativeActive
                  ? 'fas fa-thumbs-down social__link project__rateIcon project__rateIcon_negative'
                  : 'fas fa-thumbs-down social__link project__rateIcon'
              }
              onClick={() => this.onUpdateRate(false)}
            />
            <span className="project__rateLen">{negative.length}</span>
            <p className="social__tooltip">dislike</p>
          </li>
        </ul>
        {error && <p className="error">{error}</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  project: state.project,
});

export default connect(mapStateToProps, { updateRate })(Rate);
