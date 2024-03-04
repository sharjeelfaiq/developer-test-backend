require("./db/config");
const Details = require("./db/details");

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => res.send("Hello from backend"));

app.post("/details", async (req, res) => {
  try {
    let details = await Details(req.body);
    details = await details.save();
    details = details.toObject();
    res.send(details);
  } catch (error) {
    console.error(error);
  }
});

app.listen(8080, () => console.log("Server running on port 8080"));
