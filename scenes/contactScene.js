import { Scenes } from "telegraf";
import mongoose from "mongoose";
import Candidate from "../models/Candidate.js";

const contactScene = new Scenes.BaseScene("contactScene");

contactScene.enter((ctx) => ctx.reply("☎️ Telefon raqami:"));

contactScene.on("text", (ctx) => {
  ctx.session.candidate.phone_number = ctx.message.text;
  return ctx.scene.leave();
});

contactScene.leave(async (ctx) => {
  try {
    const candidate = new Candidate({
      ...ctx.session.candidate,
    });

    await candidate.save();

    await ctx.reply(
      `Ro'yxatdan muvaffaqqiyatli o'tdingiz! ✅ Bizning xodimlarimiz tez orada siz bilan bog'lanishadi.`
    );

    await ctx.reply(`Yana kimnidir ro'yxatdan o'tkazmoqchimisiz?`, {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Ha", callback_data: "register" },
            { text: "Yo'q", callback_data: "quit" },
          ],
        ],
        one_time_keyboard: true,
        remove_keyboard: true,
      },
    });
  } catch (error) {
    return ctx.reply(
      "Ro'yxatdan o'tishda xatolik yuz berdi! Qaytadan urinib ko'ring."
    );
  }
});

export default contactScene;
