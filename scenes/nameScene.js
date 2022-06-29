import { Scenes } from "telegraf";

const nameScene = new Scenes.BaseScene("nameScene");

nameScene.enter((ctx) => ctx.reply("👤 Nomzodning ism-familiyasi:"));

nameScene.on("text", (ctx) => {
  ctx.session.candidate = {};
  ctx.session.candidate.full_name = ctx.message.text;
  return ctx.scene.enter("ageScene");
});

export default nameScene;
