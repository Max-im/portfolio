import React from 'react';
import SocialItem from './SocialItem';
import './style.scss';

export default function Social({ social }) {
  return (
    <ul className="social">
      {social.map(item => (
        <SocialItem
          key={item.name}
          classes={item.classes}
          url={item.url}
          name={item.name}
        />
      ))}
    </ul>
  );
}
