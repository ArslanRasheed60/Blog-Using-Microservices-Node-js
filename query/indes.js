const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/post", (req, res) => {});

app.post("/events", (req, res) => {});

app.listen(4002, () => console.log("Listening to port 4002"));
