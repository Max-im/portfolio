import React from "react";
import defaultPic from "../../../assets/project-default.jpg";

export default function SingleImage({ project }) {
  return (
    <img
      src={project.custom_picture ? project.picture : defaultPic}
      alt={project.title}
      className="projectImg"
    />
  );
}
