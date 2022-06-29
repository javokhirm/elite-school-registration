import { Scenes } from "telegraf";

const gradeScene = new Scenes.BaseScene("gradeScene");

gradeScene.enter((ctx) =>
  ctx.reply("🟢 Elita maktabida nechanchi sinfdan boshlab o'qimoqchi:", {
    reply_markup: {
      keyboard: [
        ["1", "2"],
        ["3", "4"],
      ],
      remove_keyboard: true,
    },
  })
);

gradeScene.on("text", (ctx) => {
  ctx.session.candidate.grade = ctx.message.text;
  return ctx.scene.enter("addressScene");
});

export default gradeScene;
