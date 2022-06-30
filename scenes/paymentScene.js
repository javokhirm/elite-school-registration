import { Scenes } from "telegraf";

const paymentScene = new Scenes.BaseScene("paymentScene");

paymentScene.enter((ctx) =>
  ctx.reply(
    `💳 Siz qanaqa to'lov turini afzal ko'rgan bo'lardingiz?
  
  1️⃣ Oylik - 2.200.000 so'm

  2️⃣ Yillik - o'quv yili uchun oldindan to'liq to'lov qiluvchilarga chegirma bilan - 2.000.000 so'm

  3️⃣ Oylik - shahar ichida avtobus xizmatidan foydalanishni xohlovchilar uchun - 2.500.000 so'm

  4️⃣ Oylik - yotoqxonadan foydalanishni xohlovchilar uchun - 3.000.000
  `,
    {
      reply_markup: {
        keyboard: [
          ["1 - Oylik", "3 - Oylik (+Avtobus)"],
          ["2 - Yillik", "4 - Oylik (+Yotoqxona)"],
        ],
        remove_keyboard: true,
        one_time_keyboard: true,
      },
    }
  )
);

paymentScene.on("text", (ctx) => {
  ctx.session.candidate.payment_mode = ctx.message.text;
  return ctx.scene.enter("contactScene");
});

export default paymentScene;
