import React from "react";

export default function SocialItem({ classes, path, tooltip }) {
  return (
    <li className="social__item">
      <a
        className={"social__link " + classes}
        target="_blank"
        rel="noopener noreferrer"
        href={path}
      />
      <p className="social__tooltip">{tooltip}</p>
    </li>
  );
}
