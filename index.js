const Discord = require('discord.js');
const client = new Discord.Client();

// The prefix for the bot
const prefix = "!frag"

client.on("message", async message => {
  // Check if bot is the author
  if(message.author.bot) return

  // Check if the message contains the prefix
  if(!message.content.startsWith(prefix)) return

  // Filter out the prefix for the message
  const withoutPrefix = message.content.slice(prefix.length);

  const split = withoutPrefix.split(/ +/);

  const command = split[0];
  const args = split.slice(1);

  switch(command) {
    case "role":
      const embed = new MessageEmbed()
        .setTitle('Get your own role')
        .setColor(0xff0000)
        .setDescription('React to the role you want to get!');
      message.channel.send(embed).then(answer => answer.react('760218905808863293'));
  }
});

// Log the client in
client.login(process.env.token);
