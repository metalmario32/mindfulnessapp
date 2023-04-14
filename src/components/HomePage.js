import React from "react";
import { Col, Row } from "reactstrap";
import ShowPrompts from "./ShowPrompts";
import AddPost from "./AddPost";
import DeletePost from "./DeletePost";
import "../App.css";

export default function HomePage() {
  return (
    <>
      <Row className='mb-4'>
        <Col>
          <h2 className="Homepage-h2">Daily Entry</h2>
        </Col>
      </Row>
      <Row>
        <ShowPrompts />
        <AddPost />
        <DeletePost />
      </Row>       

    </>
  );
}
