import React from "react";
import { Link } from "react-router-dom";

export default function SimilarList({ item }) {
  return (
    < >
      <Link
        className="project__similarLink"
        to={"/portfolio/project/" + item.id}
      >
        <img src={"/photo/" + item.picture} />
        <h4 className="project__similarTitle">{item.title}</h4>
      </Link>
    </>
  );
}
