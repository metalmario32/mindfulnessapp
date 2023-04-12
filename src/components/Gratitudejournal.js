import { React, useState } from "react";
import { Button } from "reactstrap";
import "../App.css";

export default function PostForm({ addEntry }) {
  const [textValue, setTextValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addEntry({ textValue });
    setTextValue("");
  };

  return (
    <form className="gratitudeForm">
      <textarea
        type="text"
        as='textarea'
        rows="12"
        className="form-control journalTextArea"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <Button style={{ background: "blue" }} onClick={handleSubmit}>
        Post
      </Button>
    </form>
  );
}
