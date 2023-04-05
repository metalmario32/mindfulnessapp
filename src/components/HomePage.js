import React from "react";
import { Col, Row } from "reactstrap";
import Entries from "./Entries";
import "../App.css";

export default function HomePage() {
  return (
    <>
      <Row>
        <Col>
          <h2 className="Homepage-h2">Suggestion of The Day</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="Homepage-h2">5 Things You Are Grateful For</h2>
        </Col>
        <Entries />
      </Row>
    </>
  );
}
