const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("menuin on code...");
});

app.post("/text", (req, res) => {
  const text1 = req.body.text;
  console.log(text1);
  const sendText = {
    text: "보내기 성공!",
  };
  res.send(sendText);
});
app.listen(port, () => {
  console.log(`Connect at http://localhost:${port}`);
});
