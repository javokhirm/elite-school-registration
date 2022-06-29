import { Scenes } from "telegraf";

const ageScene = new Scenes.BaseScene("ageScene");

ageScene.enter((ctx) => ctx.reply("🔅 Yoshi:"));

ageScene.on("text", (ctx) => {
  ctx.session.candidate.age = ctx.message.text;
  return ctx.scene.enter("gradeScene");
});

export default ageScene;
