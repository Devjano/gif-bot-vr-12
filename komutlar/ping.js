const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (app, message, client) => {
  
const darknes = new Discord.MessageEmbed()

.setColor("BLACK")
.setDescription('Please wait...')

let start = Date.now(); 
let mesaj = await message.channel.send(darknes)
let diff = (Date.now() - start); 
let API = (app.ws.ping).toFixed(2)
    
setInterval(() => {
        
const only = new Discord.MessageEmbed()

.setDescription(`\n ping user**${diff}ms** \n\nping bot**${API}ms**`)

mesaj.edit(only);
      
}, 5000)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'lrowsxrd',
  usage: 'ping'
};