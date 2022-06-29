import { Scenes } from "telegraf";

const motherScene = new Scenes.BaseScene("motherScene");

motherScene.enter((ctx) => ctx.reply("👱🏼 Onasining ism-familiyasi va kasbi:"));

motherScene.on("text", (ctx) => {
  ctx.session.candidate.job_of_mother = ctx.message.text;
  return ctx.scene.enter("paymentScene");
});

export default motherScene;
