import React from "react";
import "./style.scss";

export default function index({ text }) {
  return (
    <div className="theTitle">
      <div className="container theTitle__container">
        <h1 className="theTitle__text">{text}</h1>
      </div>
    </div>
  );
}
