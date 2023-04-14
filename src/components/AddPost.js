import React, { useState } from "react";
import { Button } from "reactstrap";

function AddPost(props) {
  const [content, setContent] = useState("");

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = { content };
    props.addPost(newPost);
    setContent("");
  };

  return (
    <form className="gratitudeForm">
      <textarea
        type="text"
        as="textarea"
        rows="10"
        className="form-control journalTextArea"
        value={content}
        onChange={handleContentChange}
      />
      <Button style={{ background: "blue" }} onClick={handleSubmit}>
        Post
      </Button>
    </form>
  );
}

export default AddPost;
