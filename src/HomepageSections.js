import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./HomepageSections.css";

function HomepageSections({ details }) {
  let detailRender = details.map((detail) => (
    <Row key={detail.title} className="p-4 py-5 detail">
      <Col md="6" sm="12" className="p-4 mb-2 text-left detail-text" >
        <h1 className=" staatliches-font detail-header">{detail.title}</h1>
        <p>{detail.body}</p>
      </Col>
      <Col md="6" sm="12" className="">
      <img className="detail-pic" alt={detail.title} src={detail.img}></img>
      </Col>
      </Row>
  ));
  return (
    <div>
      {detailRender}
    </div>
  );
}

export default HomepageSections;
