import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';

export class PortfolioFilter extends Component {
  state = { quality: [] };

  static propTypes = {
    portfolio: PropTypes.object.isRequired
  };

  changeFilter(e) {
    // change local state
    let newQuality = [];
    if (this.state.quality.includes(e.target.name)) {
      newQuality = this.state.quality.filter(item => item !== e.target.name);
    } else {
      newQuality = [...this.state.quality, e.target.name];
    }
    this.setState({ quality: newQuality });

    // change URL
    const { sort } = queryString.parse(this.props.history.location.search);
    if (newQuality.length === 0) {
      if (sort) this.props.history.push(`/portfolio?sort=${sort}`);
      else this.props.history.push('/portfolio');
    } else {
      const quality = newQuality.join(',');
      if (sort) this.props.history.push(`/portfolio?quality=${quality}&sort=${sort}`);
      else {
        this.props.history.push(`/portfolio?quality=${quality}`);
      }
    }
  }

  render() {
    const { quality } = this.state;
    return (
      <div className="portfolioFilter">
        <div>
          <h5 className="portfolioSort__title">Filter</h5>
          <div className="portfolioSort__list">
            <label className={quality.includes('best') ? 'btn btn_active' : 'btn'}>
              <input
                type="checkbox"
                name="best"
                className="hide"
                checked={quality.includes('best')}
                data-meta="quality"
                onChange={this.changeFilter.bind(this)}
              />
              Best
            </label>

            <label className={quality.includes('medium') ? 'btn btn_active' : 'btn'}>
              <input
                type="checkbox"
                name="medium"
                data-meta="quality"
                className="hide"
                checked={quality.includes('medium')}
                onChange={this.changeFilter.bind(this)}
              />
              Medium
            </label>

            <label className={quality.includes('simple') ? 'btn btn_active' : 'btn'}>
              <input
                type="checkbox"
                name="simple"
                data-meta="quality"
                className="hide"
                checked={quality.includes('simple')}
                onChange={this.changeFilter.bind(this)}
              />
              Simple
            </label>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(mapStateToProps, {})(withRouter(PortfolioFilter));