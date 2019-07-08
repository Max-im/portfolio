import React from "react";

export default function index({ name, arr, onChange, str, selected }) {
  return (
    <select name={name} onChange={onChange} value={selected}>
      {arr.map(item => (
        <option key={item.id} value={item.id}>
          {item[str]}
        </option>
      ))}
    </select>
  );
}
