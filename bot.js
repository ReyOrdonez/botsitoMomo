const { Client, GatewayIntentBits } = require("discord.js");
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, // básico
    GatewayIntentBits.GuildMessages, // mensajes en servidores
    GatewayIntentBits.MessageContent, // leer contenido de mensajes
  ],
});

client.once("ready", () => {
  console.log(`✅ Bot conectado como ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return; // evitar bucle con otros bots

  if (message.content.toLowerCase() === "hola") {
    message.reply("¡Ey! ¿Cómo andas? 😎");
  }
});

client.login(process.env.DISCORD_TOKEN);
