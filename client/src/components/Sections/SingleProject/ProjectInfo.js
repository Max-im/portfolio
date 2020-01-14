import React from "react";
import Shown from "../../hoc/Shown";
import ProjectImg from "./ProjectImg";
import ProjectAbout from "./ProjectAbout";
import ProjectSkills from "./ProjectSkills";
import Similar from "./Similar";
import Comments from "./Comments";
// import ProjectRate from "./ProjectRate";

export default function ProjectInfo({ project }) {
  return (
    <div className="project__info">
      {project && (
        <>
          <ProjectImg project={project} />
          <Shown
            component={ProjectAbout}
            project={project}
            className="section project__about"
          />
          <Shown component={ProjectSkills} skills={project.skills} />
          <Shown component={Similar} similar={project.similar} />
          <Comments comments={project.comments} />
          {/* <ProjectRate /> */}
        </>
      )}
    </div>
  );
}
