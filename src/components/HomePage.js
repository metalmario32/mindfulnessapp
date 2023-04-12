import React from "react";
import { Col, Row } from "reactstrap";
import { Button } from "bootstrap";
// import GratitudeCard from "./GratitudeCard";
import ShowPrompts from "./ShowPrompts";
import PostForm from "./Gratitudejournal";
import { useState } from "react";
import "../App.css";

export default function HomePage() {
  const[gratitudeEntry, setGratitudeEntry] = useState([])

  const deleteEntry  = (index) => {
    setGratitudeEntry(gratitudeEntry.filter())
  }
  return (
    <>
      <Row className='mb-4'>
        <Col>
          <h2 className="Homepage-h2">Daily Entry</h2>
        </Col>
        <ShowPrompts />
        <Button color="danger" onClick={() => deleteEntry()}>Delete</Button>
        <PostForm/>       
      </Row>
      <Row>

      </Row>
    </>
  );
}
