import React, { Component } from 'react';
import '../../sass/common.scss';

export default class SelectOne extends Component {
  render() {
    const { name, value, arr, onChange } = this.props;
    const optionsArr = arr;
    return (
      <div className="input__wrapper">
        <label>
          <h5 className="input__title">{name}</h5>
          <select value={value} onChange={onChange} name={name} className="input__item">
            {optionsArr &&
              optionsArr.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.show}
                </option>
              ))}
          </select>
        </label>
      </div>
    );
  }
}
