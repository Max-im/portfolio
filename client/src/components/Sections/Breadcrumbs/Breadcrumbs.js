import React from "react";
import Breadcrumb from "./Breadcrumb";
import "../../../sass/breadcrumbs.scss";

export default function Breadcrumbs({ arr }) {
  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {arr.map((item, i) => (
          <Breadcrumb item={item} key={i} i={i} len={arr.length} />
        ))}
      </ul>
    </div>
  );
}
