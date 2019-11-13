import React from "react";
import { Link } from "react-router-dom";
import "./breadcrumbs.scss";

export default function Breadcrumbs({ arr }) {
  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {arr.map((item, i) => (
          <li className="breadcrumbs__item" key={i}>
            {i !== arr.length - 1 && (
              <>
                <Link to={item.href} className="breadcrumbs__link">
                  {item.title}
                </Link>
                {/* <span className="breadcrumbs__slash">/</span> */}
              </>
            )}
            {i === arr.length - 1 && item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
