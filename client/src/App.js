import React, { useState } from "react";
import PostCreate from "./PostCreate";

import { Container, Card } from "@mui/material";
import PostLists from "./PostLists";

function App() {
  const [count, SetCount] = useState(0);

  const updatePostData = (obj) => {
    // postsData[obj.id] = obj;
    // console.log(postsData);
    SetCount(count + 1);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "70%",
        }}
      >
        <h1>Create Post</h1>
        <PostCreate onPostCreated={updatePostData} />
      </Card>
      <h1>Posts</h1>

      <Card
        sx={{
          width: "90%",
          padding: 5,
        }}
      >
        <PostLists count={count} />
      </Card>
    </Container>
  );
}

export default App;
