const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/developer-test")

app.use(express());

app.get("/", (req, res) => res.send("Hello from backend"));

app.listen(8080, () => console.log("Server running on port 8080"));
