import React, { Component } from "react";

export default class index extends Component {
  render() {
    const { name, value, onChange, clasName } = this.props;
    return (
      <input
        type="text"
        name={name}
        placeholder={name}
        value={value}
        className={clasName}
        onChange={onChange}
      />
    );
  }
}
