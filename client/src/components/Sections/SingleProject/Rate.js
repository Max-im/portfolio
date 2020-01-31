import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Rate extends Component {
  render() {
    const likes = this.props.rate.filter(item => item.vote)
    const dislikes = this.props.rate.filter(item => !item.vote)
    return (
      <div className="pageAside__block">
      <h4 className="pageAside__title">Rate: <b className="project__rateValue">{}</b></h4>
      <ul className="project__rate">
        <li key="likes" className="social__item">
          <i className="fas fa-thumbs-up social__link social__link_active" />
          <span className="project__rateLen">{likes.length}</span>
          <p className="social__tooltip">like</p>
        </li>
        <li key="dislikes" className="social__item">
          <i className="fas fa-thumbs-down social__link" />
          <span className="project__rateLen">{dislikes.length}</span>
          <p className="social__tooltip">dislike</p>
        </li>
      </ul>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})



export default connect(mapStateToProps, {})(Rate)

