/////////////                          /////////////
///////////// DÉFINITION DES VARIABLES /////////////
/////////////                          /////////////

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json');
client.login(config.token)

/////////////                  /////////////
///////////// LANCEMENT DU BOT /////////////
///////////// & AUTRES FONCTI. /////////////
/////////////                  /////////////

client.on('ready', () => {
  console.log(`✅ Connecté en tant qu'(e) ${client.user.username} !`);
});
 
client.on('message', msg => {
  if (msg.content === 'Hi') {
    msg.reply('Hola 🖐');
  }
});

client.on("ready", function() {
    client.user.setActivity("github.com/Noaaam", { type: "WATCHING" });
    console.log("📯 Mise à jour du status en cours...");
});

client.on("ready", function() {
    console.log("📰 Made by ✨ | Noam.");
});

//////////////                     /////////////
//////////////  VOTRE PROPRE CODE  /////////////
//////////////                     /////////////

/*

          ICI ENTRER VOTRE CODE PERSONNEL !


*/
