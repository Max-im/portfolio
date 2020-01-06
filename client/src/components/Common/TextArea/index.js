import React from "react";

export default function index({ name, onChange, value }) {
  return <textarea name={name} onChange={onChange} value={value} />;
}
