const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!frag"

client.on("ready", () => {
  console.log(`Fraggy is here! We've got ${client.users.size} users, in ${client.channels.size} channels.`);
});

client.on("message", async message => {
  
  if(message.author.bot) return

  if(!message.content.startsWith(prefix)) return

  const withoutPrefix = message.content.slice(prefix.length);

  message.channel.send(withoutPrefix).then(() => message.react('\:smile:'));
});

client.login(process.env.token);
