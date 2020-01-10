import React from "react";
import Breadcrumb from "./Breadcrumb";
import "./breadcrumbs.scss";

export default function Breadcrumbs({ arr }) {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {arr.map((item, i) => (
            <Breadcrumb item={item} key={i} i={i} len={arr.length} />
          ))}
        </ul>
      </div>
    </div>
  );
}
