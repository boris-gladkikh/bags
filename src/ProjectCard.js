import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img
        className="project-card-img"
        src={project.coverImg}
        alt={project.title}
      />
    </div>
  );
}

export default ProjectCard;
