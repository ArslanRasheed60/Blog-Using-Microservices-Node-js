import { Card, Grid } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import tinycolor from "tinycolor2";

import { motion } from "framer-motion";
import CommentCreate from "./CommentCreate";
import CommentLists from "./CommentLists";

//local exports

const PostLists = ({ postsData, count }) => {
  const [posts, setPosts] = useState({});
  const [commentCount, setCommentCount] = useState(0);

  const isColorSuitableForWhiteText = (color) => {
    const contrast = tinycolor.readability(color, "#ffffff");
    return contrast >= 4.5;
  };

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };

  //   const fetchPosts = () => {
  //     // const res = await axios.get("http://localhost:4000/posts");
  //     // setPosts(res.data);
  //     // setPosts(localPosts);
  //   };

  useEffect(() => {
    fetchPosts();
  }, [count]);

  const onCommentCreated = () => {
    setCommentCount(commentCount + 1);
  };

  const updateCommentCount = (value) => {
    setCommentCount(value);
  };

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {Object.values(posts).map((post) => {
        return (
          <Grid item xs={6} key={post.id}>
            <motion.div
              animate={{ scale: [0, 1] }}
              transition={{
                ease: "linear",
                duration: 0.5,
                x: { duration: 0.5 },
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: post.backgroundColor,
                  padding: 1,
                  color: isColorSuitableForWhiteText(post.backgroundColor)
                    ? "#ffffff"
                    : "#000000",
                }}
              >
                <h2>{post.title}</h2>
                <div style={{ fontStyle: "bold" }}>
                  Comments: {post.comments.length}
                </div>
                <br />
                <CommentLists
                  comments={post.comments}
                  color={post.backgroundColor}
                  commentCount={commentCount}
                  updateCommentCount={updateCommentCount}
                />
                <CommentCreate
                  postId={post.id}
                  onCommentCreated={onCommentCreated}
                />
              </Card>
            </motion.div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PostLists;
