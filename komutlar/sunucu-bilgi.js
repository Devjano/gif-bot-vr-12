const Discord = require('discord.js');

exports.run = (client, message) => {

let sunucu = new Discord.MessageEmbed()

.setThumbnail(message.guild.iconURL)

.setColor("BLACK")

.setTitle("\n\nSunucu İstatistik")

.addField('server id:', message.guild.id)
.addField('owner server :', message.guild.owner, true)
.addField('Server Area :', message.guild.region)
.addField('channel afk :', `${message.guild.afkChannel}`, true)
.addField('Number of members:', message.guild.memberCount)

return message.channel.send(sunucu) 

}; 

module.exports.conf = {
aliases: ["server"],
permLevel: 0, 
enabled: true,
guildOnly: true
};

module.exports.help = {
name: 's',
description: 'dev jano',
usage: 'dev jano'
};