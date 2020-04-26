import React from 'react';
import '../../sass/common.scss';

export default ({ init, onChange, name }) => {
  const theDate = new Date(init);
  const formated = `${theDate.getFullYear()}-${
    theDate.getMonth() - 0 + 1 < 10
      ? '0' + (theDate.getMonth() - 0 + 1)
      : theDate.getMonth() - 0 + 1
  }-${theDate.getDate() < 10 ? '0' + theDate.getDate() : theDate.getDate()}`;
  return (
    <div className="input__wrapper">
      <label>
        <h5 className="input__title">{name}</h5>
        <input
          type="date"
          name={name}
          value={formated}
          onChange={onChange}
          className="input__item"
        />
      </label>
    </div>
  );
};
