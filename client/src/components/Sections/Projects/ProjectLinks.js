import React from 'react';

export default function ProjectLinks({ source, rootClass }) {
  return (
    <div className={rootClass+"__btns"}>
        {source.map((linkObj) => (
        <a className={rootClass+"__btn"} href={linkObj.url} key={linkObj.id} target="_blank" rel="nofollow, noindex">
            <i className={linkObj.classes + ' ' + rootClass + "__btnIcon"} />
            {linkObj.name}
        </a>
        ))}
    </div>
  );
}
