import React from 'react';

export default function Rate({ likes, dislikes }) {
  const theRate = Math.round(likes.length / dislikes.length * 100) / 100;
  
  return (
    <div className="pageAside__block">
      <h4 className="pageAside__title">Rate: <b className="project__rateValue">{theRate}</b></h4>
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
  );
}
