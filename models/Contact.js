import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  full_name: String,
  phone_number: String,
  comment: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Contact", contactSchema);
