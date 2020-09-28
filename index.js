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
  const withoutPrefix = message.content.slice(prefix.length).trim();

  // Split message data up
  const split = withoutPrefix.split(/ +/);

  // Get the command and the arguments
  const command = split[0];
  const args = split.slice(1);

  // Switch on the command
  switch(command) {
    // Used for creating a get a rank feature
    case "role":
      let embed = new Discord.MessageEmbed()
        .setDescription('760218905808863293');
      message.channel.send("Test").then(answer => answer.react('760218905808863293'));
    case "help":
      message.channel.send("You're on your own kid.");
    default: 
      message.channel.send(`Type "${prefix} help" to see the availlable commands`);
  }
});

// Log the client in
client.login(process.env.token);
