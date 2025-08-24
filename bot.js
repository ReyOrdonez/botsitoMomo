import { Client, Events, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

// Require the necessary discord.js classes

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, async (readyClient) => {
  const guild = await readyClient.guilds.fetch("1380348686416085133");
  const channel = await guild.channels.fetch("1380348692875444365");
  if (channel.isTextBased()) {
    channel.send("Ya me conecte hijos de su puta madre");
  }
});

//ALGUIEN SALUDA AL BOT
client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) return;

  if (message.content === "hola momo uwu") {
    message.channel.send("que pedo joto");
  }
});

client.login(process.env.DISCORD_TOKEN);
