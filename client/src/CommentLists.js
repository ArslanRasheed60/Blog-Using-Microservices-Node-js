import React, { useEffect } from "react";
import tinycolor from "tinycolor2";

import { motion } from "framer-motion";

const CommentLists = ({ comments, color, commentCount }) => {
  // const [comments, setComments] = useState({});

  const isColorSuitableForWhiteText = (color) => {
    const contrast = tinycolor.readability(color, "#ffffff");
    return contrast >= 4.5;
  };

  useEffect(() => {
    // fetchComments();
  }, [commentCount]);

  return (
    <div>
      {comments.map((comment) => {
        return (
          <motion.div
            key={comment.id}
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
