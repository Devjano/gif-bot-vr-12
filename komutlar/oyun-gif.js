const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/694694493525377035/737310007929864252/image0.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Woman Gif ;")

.setColor("BLACK")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['oynfekn','gaekfjnvkrme ','gifwnfvdknvkoman','womavfebvjrngif','kadfvbdfjın'],

  permLevel: 0

};

exports.help = {

  name: 'ofdjkyun',

  description: 'lrovcmmwsxrd',

  usage: 'ojk dkyun'

};