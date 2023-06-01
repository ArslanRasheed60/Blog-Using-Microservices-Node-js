const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

//random data
const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title, backgroundColor } = req.body;

  posts[id] = {
    id,
    title,
    backgroundColor,
  };

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
