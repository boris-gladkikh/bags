import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";
import projects from "./projectList";

//component projects gallery. utilizes css grid for display, and renders projectCard components

function Projects() {
  let renderProjects = projects.map((project) => (
    <Col sm="12" md="6" lg="4" xl="3">
      <ProjectCard className="my-2" project={project} />
    </Col>
  ));
  return (
    <Container className=" w-100 py-4">
      <Row>{renderProjects}</Row>
    </Container>
  );
}

export default Projects;
