import React from 'react';
import Shown from '../../hoc/Shown';
import ProjectImg from "./ProjectImg";
import ProjectAbout from "./ProjectAbout";
import ProjectSkills from "./ProjectSkills";
import Comments from "./Comments";
// import ProjectRate from "./ProjectRate";

export default function ProjectInfo({ project }) {
  return (
    <div>
      <ProjectImg project={project} />
      <Shown component={ProjectAbout} project={project} className="section" />
      <Shown component={ProjectSkills} skills={project.skills} />
      <Comments comments={project.comments}/>
      {/* <ProjectRate /> */}
    </div>
  );
}
