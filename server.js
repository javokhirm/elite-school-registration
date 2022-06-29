import express from "express";
import "./db.js";
import Candidate from "./models/Candidate.js";
import Contact from "./models/Contact.js";
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5001;

// import telegram bot server
import "./bot.js";

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const candidates = await Candidate.find();
  return res.status(200).json(candidates);
});

app.post("/contacts", async (req, res) => {
  const { full_name, phone_number, comment } = req.body;
  if (!full_name || !phone_number || !comment) {
    return res.status(400).json({ message: "Hamma katakni to'ldiring" });
  }
  const contact = new Contact({
    full_name,
    phone_number,
    comment,
  });
  await contact.save();
  return res.status(200).json({ message: "Message sent!" });
});

app.get("/contacts", async (req, res) => {
  const contacts = await Contact.find();
  return res.status(200).json(contacts);
});

app.listen(port, () => {
  console.log("Server started working on port", port);
});
