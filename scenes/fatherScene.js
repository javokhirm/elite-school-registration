import { Scenes } from "telegraf";

const fatherScene = new Scenes.BaseScene("fatherScene");

fatherScene.enter((ctx) => ctx.reply("👱🏼‍♂️ Otasining ism-familiyasi va kasbi:"));

fatherScene.on("text", (ctx) => {
  ctx.session.candidate.job_of_father = ctx.message.text;
  return ctx.scene.enter("motherScene");
});

export default fatherScene;
