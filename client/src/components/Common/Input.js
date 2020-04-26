import React from 'react';
import '../../sass/common.scss';

export default function Input({ value, name, type = 'text', onChange }) {
  return (
    <div className="input__wrapper">
      <label>
        <h5 className="input__title">{name}</h5>
        {type === 'text' && (
          <input className="input__item" value={value} name={name} onChange={onChange} />
        )}
        {type === 'textarea' && (
          <textarea
            rows="15"
            cols="100"
            className="input__item"
            value={value}
            name={name}
            onChange={onChange}
          ></textarea>
        )}
      </label>
    </div>
  );
}
