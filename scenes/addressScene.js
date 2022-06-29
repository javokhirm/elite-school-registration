import { Scenes } from "telegraf";

const addressScene = new Scenes.BaseScene("addressScene");

addressScene.enter((ctx) => ctx.reply("📍 Manzil:"));

addressScene.on("text", (ctx) => {
  ctx.session.candidate.address = ctx.message.text;
  return ctx.scene.enter("fatherScene");
});

export default addressScene;
