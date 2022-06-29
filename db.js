import mongoose from "mongoose";
import config from "./config/index.js";

export default mongoose
  .connect(config.db)
  .then(() => console.log("connected to the database"))
  .catch((err) => console.log(err));
