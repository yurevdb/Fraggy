const Discord = require('discord.js');
const client = new Discord.Client();

// The prefix for the bot
const prefix = "-f"

// On startup
client.on("ready", () => {
  // Set activity of the bot
  client.user.setPresence({ activity: { name: '-f help', type: 'LISTENING' }, status: 'online' });
});

// Receiving a message in the discord
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
      let help = CreateMessage("Check out the wiki for any help.")
        .setURL("https://github.com/yurevdb/Fraggy/wiki")
        .setTitle("Help")
        .setThumbnail("https://github.githubassets.com/images/modules/open_graph/github-octocat.png");
      message.channel.send(help);
      break;
    default: 
      message.channel.send(`Type "${prefix} help" to see the availlable commands`);
      break;
  }
});

// Log the client in
client.login(process.env.token);

/***
  Creates a fancy bot message
*/
const CreateMessage = text => {
  let message = new Discord.MessageEmbed()
    .setDescription(text)
    .setColor(0xff0000);
  return message;
}

/***
  Creates a message for any user to react to and give out a role.
*/
const CreateRoleMessage = async (message) => {
  // Send the message
  const send = await message.channel.send(CreateMessage('React to this message to get your **Raider** Role!'))

  // Send a reaction
  send.react('760218905808863293');

  let filter = (reaction, user) => true;
  send.awaitReactions(filter, { time: 10000 }).then(collected => console.log(collected));
};
