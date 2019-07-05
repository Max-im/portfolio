import React from "react";

export default function index({ name, arr, onChange, str }) {
  return (
    <select name={name} onChange={onChange}>
      {arr.map(item => (
        <option key={item.id} value={item.id}>
          {item[str]}
        </option>
      ))}
    </select>
  );
}
