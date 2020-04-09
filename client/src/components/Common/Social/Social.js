import React from 'react';
import SocialItem from './SocialItem';
import '../../../sass/social.scss';

export default function Social({ social }) {
  return (
    <ul className="social">
      {social && social.map(item => (
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
