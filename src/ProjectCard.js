import React, {useState} from "react";
import "./ProjectCard.css";
import ProjectModal from "./ProjectModal";


//individual cards for project photos, opens project modal on click
function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false);

  function handleClick(){
    setShowModal(!showModal);

  }
  return (
    <>
    {showModal && <ProjectModal project={project} setShowModal={handleClick} />}
    <div onClick={handleClick} className="project-card">
      <img
        className="project-card-img"
        src={project.coverImg}
        alt={project.title}
      />
    </div>
    </>
    
  );
}

export default ProjectCard;
