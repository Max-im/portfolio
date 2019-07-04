import React from "react";
import "./style.scss";
import pic from "../../../assets/loader.gif";

export default function index() {
  return (
    <div className="spinner">
      <img src={pic} alt="Loading..." className="spinner__img" />
    </div>
  );
}
