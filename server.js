import express from "express";
import Candidate from "./models/Candidate.js";
const app = express();
const port = process.env.PORT || 5001;
import "./db.js";

app.get("/candidates", async (req, res) => {
  const candidates = await Candidate.find();
  return res.status(200).json(candidates);
});

app.listen(port, () => {
  console.log("server started working on port", port);
});
