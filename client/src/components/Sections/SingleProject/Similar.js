import React from "react";
import SimilarProject from "./SimilarProject";
import Carousel from "../../hoc/Carousel";

export default function Similar({ similar }) {
  return (
    <section className="section">
      <h3 className="section__title">Similar Projects</h3>
      <Carousel arr={similar} item={SimilarProject} number="3" />
    </section>
  );
}
