import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

export class PortfolioSort extends Component {
  state = { sortBy: 'level_id' };

  onChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
    const { pathname, search } = this.props.history.location;
    const { quality } = queryString.parse(search);

    // without quality
    if (!quality) {
      this.props.history.push({ pathname, search: `?sort=${value}` });
    }
    // with quality
    else {
      this.props.history.push({
        pathname,
        search: `?quality=${quality}&sort=${value}`
      });
    }

    const page = this.props.match.params.page || 1;
  }

  render() {
    const { sortBy } = this.state;
    return (
      <div className="portfolioSort">
        <h5 className="portfolioSort__title">Sort by</h5>
        <div className="portfolioSort__list">
          <label className={sortBy === 'level_id' ? 'btn btn_active' : 'btn'}>
            <input
              name="sortBy"
              type="radio"
              className="hide"
              value="level_id"
              onChange={this.onChange.bind(this)}
              checked={sortBy === 'level_id'}
            />
            Level
          </label>

          <label className={sortBy === 'date' ? 'btn btn_active' : 'btn'}>
            <input
              name="sortBy"
              className="hide"
              type="radio"
              value="date"
              onChange={this.onChange.bind(this)}
              checked={sortBy === 'date'}
            />
            Date
          </label>

          <label className={sortBy === 'title' ? 'btn btn_active' : 'btn'}>
            <input
              name="sortBy"
              type="radio"
              className="hide"
              value="title"
              onChange={this.onChange.bind(this)}
              checked={sortBy === 'title'}
            />
            Name
          </label>
        </div>
      </div>
    );
  }
}

export default withRouter(PortfolioSort);
