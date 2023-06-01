import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import tinycolor from "tinycolor2";

import { motion } from "framer-motion";

const CommentLists = ({
  comments,
  color,
  commentCount,
  updateCommentCount,
}) => {
  // const [comments, setComments] = useState({});

  const isColorSuitableForWhiteText = (color) => {
    const contrast = tinycolor.readability(color, "#ffffff");
    return contrast >= 4.5;
  };

  // const fetchComments = async () => {
  //   const res = await axios.get(
  //     `http://localhost:4001/posts/${postId}/comments`
  //   );
  //   setComments(res.data);
  //   updateCommentCount(Object.keys(comments).length);
  // };

  useEffect(() => {
    // fetchComments();
  }, [commentCount]);

  return (
    <div>
      {comments.map((comment) => {
        return (
          <motion.div
            key={comment.id}
            // animate={{ scale: [0, 1] }}
            animate={{ y: [40, 1] }}
            transition={{
              ease: "linear",
              duration: 0.3,
              x: { duration: 0.3 },
            }}
          >
            <div
              sx={{
                color: isColorSuitableForWhiteText(color)
                  ? "#ffffff"
                  : "#000000",
              }}
            >
              {comment.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CommentLists;
