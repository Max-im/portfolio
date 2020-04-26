import React, { Component } from 'react';

export default class SelectMany extends Component {
  state = {
    arr: [],
  };

  onToggle = () => {};

  render() {
    const { name, onChange, value, arr } = this.props;
    return (
      <div className="input__wrapper">
        <label>
          <h5 className="input__title">{name}</h5>
          {arr &&
            arr.map((item) => (
              <div>
                <img alt="" className="admin__skillIcon" src={'/photo/' + item.img} />
              </div>
            ))}
        </label>
      </div>
    );
  }
}
