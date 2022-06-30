import { Telegraf, Scenes, session } from "telegraf";
import config from "./config/index.js";
import addressScene from "./scenes/addressScene.js";
import ageScene from "./scenes/ageScene.js";
import contactScene from "./scenes/contactScene.js";
import fatherScene from "./scenes/fatherScene.js";
import gradeScene from "./scenes/gradeScene.js";
import motherScene from "./scenes/motherScene.js";
import nameScene from "./scenes/nameScene.js";
import paymentScene from "./scenes/paymentScene.js";

const bot = new Telegraf(config.token);

const stage = new Scenes.Stage([
  nameScene,
  ageScene,
  addressScene,
  gradeScene,
  fatherScene,
  motherScene,
  paymentScene,
  contactScene,
]);

bot.use(session());
bot.use(stage.middleware());

bot.command("start", async (ctx) => {
  ctx.session.candidate = {};
  ctx.session.candidate.telegram = {};
  ctx.session.candidate.telegram.first_name = ctx.message.from.first_name;
  ctx.session.candidate.telegram.last_name = ctx.message.from.last_name;
  ctx.session.candidate.telegram.user_id = ctx.message.from.id;
  ctx.session.candidate.telegram.chat_id = ctx.message.chat.id;

  await ctx.reply(
    `Salom ${ctx.message.from.first_name}! ${ctx.botInfo.first_name} botiga xush kelibsiz. Ro'yxatdan o'tish uchun quyidagi savollarga javob bering.`
  );
  return ctx.scene.enter("nameScene");
});

bot.action("register", (ctx) => {
  return ctx.scene.enter("nameScene");
});

bot.action("quit", (ctx) => {
  return ctx.reply("Rahmat!😊");
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
