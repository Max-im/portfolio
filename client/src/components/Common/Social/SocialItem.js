import React from "react";

export default function SocialItem({ classes, url, name }) {
  return (
    <li className="social__item">
      <a
        className={"social__link " + classes}
        target="_blank"
        rel="noopener noreferrer"
        href={url}
      />
      <p className="social__tooltip">{name}</p>
    </li>
  );
}
