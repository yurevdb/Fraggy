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
      CreateRoleMessage(message);
      break;
    case "help":
      message.channel.send("You're on your own kid.");
      break;
    default: 
      message.channel.send(`Type "${prefix} help" to see the availlable commands`);
      break;
  }
});

// Log the client in
client.login(process.env.token);

/***
  Creates a message for any user to react to and give out a role.
*/
const CreateRoleMessage = async (message) => {
  // Create the embed message
  let embed = new Discord.MessageEmbed()
    .setDescription('React to this message to get your Raider Role!')
    .setColor(0xff0000);

  let filter = (reaction, user) => reaction.emoji.name === 'fragments';

  // Send the message
  const send = await message.channel.send(embed)
  send.react('760218905808863293');
  send.awaitReactions(filter).then(collected => {
                                          console.log(collected);
                                          for (item in collected) {
                                            console.log(item);
                                          }
                                        });
};
