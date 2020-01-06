import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ item, i, len }) {
  const map = {
    home: { title: "Home", href: "/" },
    resume: { title: "Resume", href: "/resume" },
    portfolio: { title: "Portfolio", href: "/portfolio" },
    project: { title: "Project" }
  };

  const breadcrumb = map[item];

  return (
    <li className="breadcrumbs__item">
      {i !== len - 1 && (
        <>
          <Link to={breadcrumb.href} className="breadcrumbs__link">
            {breadcrumb.title}
          </Link>
          {/* <span className="breadcrumbs__slash">/</span> */}
        </>
      )}
      {i === len - 1 && breadcrumb.title}
    </li>
  );
}
