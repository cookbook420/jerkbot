const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

    var use = message.mentions.users.first();
	var mem = message.mentions.members.first();
	if (mem) {
	var embed = new Discord.RichEmbed()
	.setColor(`${mem.displayHexColor}`)
	.setTimestamp()
	.setThumbnail(`${use.avatarURL}`)
	.setDescription(`info ...`)
	.setTitle(`Userinfo for: ${mem.displayName}`)
	.addField(`**Username & tag:**`, `${use.tag}`)
	.addField(`**ID:**`, `${use.id}`)
	.addField(`**Status:**`, `${mem.presence.status}`)
	.addField(`**Created at:**`, `${use.createdAt}`)
	.addField(`**Joined at:**`, `${mem.joinedAt}`)
	.addField(`**Highest role:**`, `${mem.highestRole.name}`)
	.addField(`**Hoist role:**`, `${mem.hoistRole.name}`)
	.addField(`**display Color:**`, `${mem.displayHexColor}`)
	.addField(`**Server Deafened:**`, `${mem.serverDeaf}`)
	.addField(`**Server muted:**`, `${mem.serverMute}`)
	.addField(`**Roles:**`, `${mem.roles.map(r => r).join(' , ')}`)
	.setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	message.channel.send({embed: embed});
	console.log(`${message.member.displayName} got the userinfo for ${mem.displayName} in ${message.guild}`)
	}
	if (!mem) {
		var embed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	.setTimestamp()
	.setThumbnail(`${message.author.avatarURL}`)
	.setDescription(`info ...`)
	.setTitle(`Userinfo for: ${message.member.displayName}`)
	.addField(`**Username & tag:**`, `${message.author.tag}`)
	.addField(`**ID:**`, `${message.author.id}`)
	.addField(`**Status:**`, `${message.member.presence.status}`)
	.addField(`**Created at:**`, `${message.author.createdAt}`)
	.addField(`**Joined at:**`, `${message.member.joinedAt}`)
	.addField(`**Highest role:**`, `${message.member.highestRole.name}`)
	.addField(`**Hoist role:**`, `${message.member.hoistRole.name}`)
	.addField(`**Display Color:**`, `${message.member.displayHexColor}`)
	.addField(`**Server Deafened:**`, `${message.member.serverDeaf}`)
	.addField(`**Server muted:**`, `${message.member.serverMute}`)
	.addField(`**Roles:**`, `${message.member.roles.map(r => r).join(' , ')}`)
	.setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	message.channel.send({embed: embed});
	console.log(`${message.author.username} got thier userinfo in ${message.guild}`)
	}

}
module.exports.help = {
    name: "userinfo"
}