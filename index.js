const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "!frag"

client.on("ready", () => {
  console.log(`Fraggy is here! We've got ${client.users.size} users, in ${client.channels.size} channels.`);
});

client.on("message", async message => {
  
  if(message.author.bot) return

  if(!message.content.startswith(prefix)) return

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  message.channel.send(args.join(" "));

});

client.login(process.env.token);
