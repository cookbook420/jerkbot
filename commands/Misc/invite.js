const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

    var embed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	.setTimestamp()
	.setThumbnail(`${client.user.avatarURL}`)
	.setTitle(`links:`)
	.addField("**links to invite me to a server:**",`[jerkbot/invite (admin)](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) || [jerkbot/invite (mod)](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1412820055)`)
	.addField("**links to my support sever:**", `ain't no server yet`)
	message.channel.send({embed: embed});

}

module.exports.help = {
    name: "invite"
}