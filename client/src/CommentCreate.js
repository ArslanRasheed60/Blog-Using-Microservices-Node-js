import React, { useState } from "react";

import axios from "axios";
import tinycolor from "tinycolor2";

import { Input, FormControl, InputLabel, Button } from "@mui/material";

const CommentCreate = ({ postId, onCommentCreated }) => {
  const [content, setContent] = useState("");

  const handleOnSubmit = async () => {
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    onCommentCreated();
    console.log(postId);
    setContent("");
  };

  return (
    <FormControl
      sx={{
        width: "70%",
      }}
    >
      <InputLabel htmlFor="my-input">Comment</InputLabel>
      <Input
        id="my-input"
        sx={{ marginY: 2 }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ marginBottom: 2 }}
        color="secondary"
        onClick={handleOnSubmit}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default CommentCreate;
