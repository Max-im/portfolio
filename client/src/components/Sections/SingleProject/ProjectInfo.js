import React from 'react';
import ProjectImg from "./ProjectImg";
import ProjectAbout from "./ProjectAbout";
import ProjectSkills from "./ProjectSkills";
// import ProjectRate from "./ProjectRate";
// import Comments from "../Sections/SingleProject/Comments";

export default function ProjectInfo({ project }) {
  return (
    <div>
      <ProjectImg project={project} />
      <ProjectAbout project={project} />
      <ProjectSkills skills={project.skills} />
            {/* <ProjectRate /> */}
            {/* <Comments /> */}
    </div>
  );
}
