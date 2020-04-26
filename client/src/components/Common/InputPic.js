import React from 'react';

export default function InputPic({ name, value }) {
  return (
    <div className="input__wrapper">
      <label>
        <h5 className="input__title">{name}</h5>
        <img alt="picture" className="admin__projectPic" src={'/photo/' + value} />
      </label>
    </div>
  );
}
