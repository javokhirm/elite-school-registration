import dotenv from "dotenv";
dotenv.config();

if (!process.env.BOT_TOKEN) {
  console.error("BOT_TOKEN is required!");
}

const config = {
  db: process.env.MONGODB_URL,
  token: process.env.BOT_TOKEN,
  port: process.env.PORT,
};

export default config;
