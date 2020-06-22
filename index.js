const bot = require("./bot/bot");
const server = require("./server");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

bot.login(process.env.BOT_TOKEN);
