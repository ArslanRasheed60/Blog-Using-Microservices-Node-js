import React, { useState } from "react";

import axios from "axios";
import tinycolor from "tinycolor2";

import { Input, FormControl, InputLabel, Button } from "@mui/material";

const generateRandomColor = () => {
  return tinycolor.random().toString();
};

const PostCreate = (props) => {
  const { onPostCreated } = props;

  const [title, setTitle] = useState("");

  const handleOnSubmit = async () => {
    const backgroundColor = generateRandomColor();
    await axios.post("http://localhost:4000/posts", { title, backgroundColor });
    console.log(title);
    onPostCreated({
      // id: generateRandomId(),
      // title,
    });
    setTitle("");
  };
  //   const handleOnSubmit = () => {
  //     console.log(title);
  //     onPostCreated({
  //       id: generateRandomId(),
  //       title,
  //     });
  //     setTitle("");
  //   };

  return (
    <FormControl
      sx={{
        width: "70%",
      }}
    >
      <InputLabel htmlFor="my-input">Title</InputLabel>
      <Input
        id="my-input"
        sx={{ marginY: 5 }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ marginBottom: 5 }}
        color="primary"
        onClick={handleOnSubmit}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default PostCreate;
