import React from "react";
import PortfolioSort from "./PortfolioSort";
import PortfolioQuality from "./PortfolioQuality";
import ProjectsAmount from "./ProjectsAmount";

export default function ProjectsAside() {
  return (
    <>
      <PortfolioSort />
      <ProjectsAmount />
      <PortfolioQuality />
    </>
  );
}

