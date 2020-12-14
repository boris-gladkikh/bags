import React from "react";
import "./ProjectModal.css";

function ProjectModal({ project, setShowModal }) {
  return (
    <div onClick={setShowModal} className="project-modal">
      <img src={project.coverImg} alt={project.title}></img>
      <div className="project-modal-text">
        <h4>{project.title}</h4>
        <p>Click to close</p>
        <p>{project.description}</p>

      </div>
    </div>
  );
}

export default ProjectModal