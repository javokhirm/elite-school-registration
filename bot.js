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

bot.command("start", (ctx) => {
  ctx.session.candidate = {};
  ctx.session.candidate.username = ctx.message.from.username;

  ctx.reply(
    `Salom ${ctx.message.from.first_name}! ${ctx.botInfo.first_name} botiga xush kelibsiz. Ro'yxatdan o'tish uchun quyidagi savollarga javob bering.`
  );
  return ctx.scene.enter("nameScene");
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
