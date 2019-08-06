import React, { Component } from "react";

export default class index extends Component {
  render() {
    const { name, value, onChange, clasName } = this.props;
    return (
      <input
        type="text"
        className={clasName}
        name={name}
        placeholder={name}
        value={value}
        onChange={onChange}
      />
    );
  }
}
