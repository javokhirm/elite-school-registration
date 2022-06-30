import mongoose from "mongoose";

const candidateSchame = new mongoose.Schema({
  full_name: String,
  telegram_details: Object,
  age: String,
  address: String,
  grade: String,
  phone_number: String,
  job_of_father: String,
  job_of_mother: String,
  payment_mode: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Candidate", candidateSchame);
