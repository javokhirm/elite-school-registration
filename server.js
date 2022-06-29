import express from "express";
import Candidate from "./models/Candidate.js";
import config from "./config/index.js";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 8080;
import "./db.js";

app.get("/candidates", async (req, res) => {
  const candidates = await Candidate.find();

  return res.status(200).json(candidates);
});

app.listen(port, () => {
  console.log("server started working");
});
