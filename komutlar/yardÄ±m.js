const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('BLACK') 
.addField(`**help commands**`,
          
 `
**| .girl | .man | .couple | .baby | .anime | .animal |**


**Info Command**

**| .bot | .avatar | .help | .ping |**

    
**[ invite ]**
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=778276774320275487&permissions=8&scope=bot)** 
**[ support ]**
**[ click here ](https://discord.gg/3wykSpqjZq)**`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: '',
  description: 'help bot',
  usage: 'dev jano'
};
