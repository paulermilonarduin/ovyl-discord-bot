const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on('messageCreate', message => {
  const aurelien = '160758478611283968';
  
  if (message.author.id == aurelien) {
    message.channel.send(`Roh mais ferme ta gueule <@${aurelien}>...`);
  }

  if (message.content === '!ping') {
    message.channel.send('Pong !');
  }

  if (message.content === '!aurélien') {
    message.channel.send('Rénove ma salle de bain !');
  }
});

client.login('');