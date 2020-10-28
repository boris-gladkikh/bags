import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projectList";
import './Projects.css';

//component projects gallery. utilizes css grid for display, and renders projectCard components

function Projects() {
  let renderProjects = projects.map((project) => (
    <div key={project.id}>
      <ProjectCard className="my-2" project={project} />
    </div>
  ));
  return <div className="project-grid ">{renderProjects}</div>;
}

export default Projects;
