const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('BLACK') 
.addField(`**help commands bot gif**`,
          
 `
**| $paly | $stop | $skip | $skipto | $volume |**
**| $queue | $loop | $pause | $nowplaying |**
**| $shuffle | $uptime | $search | $remove |**
**| $clip | $clips | $lyrics | $move | $playlist |**

**Info Command**

**| $bot | $support | $invite | $help |$ping |**

**Music Easy Commands**
**| $p | $s | $sk | $st | $v | $q | $l | $pa | $np |**
**| $sh | $u | $se | $rm | $r | $ms | $b | $sp |**
**| $c | $cl | $pl | $mv | $ly | $add | $h |**
     
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
  name: 'h',
  description: 'help bot',
  usage: 'dev jano'
};