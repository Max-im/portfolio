import React from 'react';

export default function Source({ source }) {
  return (
    <div className="pageAside__block">
      <h4 className="pageAside__title">Source</h4>
      <ul className="project__sourceList">
        {source.map(item => (
          <li key={item.id} className="social__item">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className={item.classes + " social__link"} />
            <p className="social__tooltip">
                {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
