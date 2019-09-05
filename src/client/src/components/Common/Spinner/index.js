import React from "react";
import pic from "../../../assets/loader.gif";
import "./style.scss";

export default function index() {
  return (
    <div className="spinner">
      <img src={pic} alt="Loading..." className="spinner__img" />
    </div>
  );
}
