import { Telegraf } from "telegraf";

import express from "express";
const app = express();
const port = 9000;

const APIKEY = "6556542965:AAHKGnnkPfOW0sQz_CI4KwPFO4WiuITgdYs";

const bot = new Telegraf(APIKEY);

bot.start((ctx) =>
  ctx.reply(
    "Welcome 🙏 You can see the cgpa and basic information of any MCA students, you just need to enter /registration-number."
  )
);

bot.command("oldschool", (ctx) => ctx.reply("Hello sir/ma'am"));

bot.command(
  "11810060",
  Telegraf.reply(
    `
    regNo: "11810060",
    name: "Chauhan Apurva Hasmukhlal",
    phone: "6354403276",
    email: "apurvachauhan63@gmail.com",
    cgpa: "6.21",
    `
  )
);

bot.command(
  "11901284",
  Telegraf.reply(
    `
    regNo: "11901284",
    name: "Harshit",
    phone: "7895784583",
    email: "shkbc03@gmail.com",
    cgpa: "7.78",
    `
  )
);

bot.command(
  "11902680",
  Telegraf.reply(
    `
    regNo: "11902680",
    name: "Sachin Kumar Faujdar",
    phone: "8445009771",
    email: "faujdarsachin@yahoo.com",
    cgpa: "8.72",
    `
  )
);

bot.command(
  "11904696",
  Telegraf.reply(
    `
    regNo: "11904696",
    name: "Ayarekar Kaushal Tanmay",
    phone: "8275126591",
    email: "kaushalayarekar@gmail.com",
    cgpa: "8.82",
    `
  )
);

bot.command(
  "11905259",
  Telegraf.reply(
    `
    regNo: "11905259",
    name: "Sheekha Mahapatro",
    phone: "8700650140",
    email: "sheekhamahapatro.sm@gmail.com",
    cgpa: "8.18",
    `
  )
);

bot.command(
  "11905968",
  Telegraf.reply(
    `
    regNo: "11905968",
    name: "Sudhanshu Ranjan",
    phone: "8847241872",
    email: "Rajaashujha@gmail.com",
    cgpa: "7.18",
    `
  )
);

bot.command(
  "11810060",
  Telegraf.reply(
    `
    regNo: "11906059",
    name: "Anup Kumar",
    phone: "6203190442",
    email: "anupkr08oct2002@gmail.com",
    cgpa: "8.02",
    `
  )
);

bot.command(
  "12208785",
  Telegraf.reply(
    `
    regNo: "12208785",
    name: "Saroj Kumar",
    phone: "8638316090",
    email: "strange8638@gmail.com",
    cgpa: "8.13",
    `
  )
);

bot.launch();

app.use("/", (req, res) => {
  res.json({ message: "Started" });
});

app.listen(9000, () => {
  console.log("Server started on 9000");
});
