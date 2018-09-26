const Discord = require("discord.js");
const prefixes = require("../../jsons/prefixes.json");

module.exports.run = async (client,message,args) => {
	
	const prefix = prefixes[message.guild.id].prefixes;
const uwu = message.content.split(" ").slice(1).join(" ");

if (!uwu && message.author.id !== "377271843502948354") {	
    const RichEmbed = new Discord.RichEmbed()
    .setColor(`${message.member.displayHexColor}`)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .setTitle(`help for ${client.user.username}`)
    .addField('**Misc commands: ['+ client.miscCommands.size +']**', '`'+client.miscCommands.map(c=>c.help.name).join('` `')+'`')
    .addField('**Fun commands: ['+ client.funCommands.size +']**', '`'+client.funCommands.map(c=>c.help.name).join('` `')+'`')
    .addField('**Moderation commands: ['+ client.moderationCommands.size +']**', '`'+client.moderationCommands.map(c=>c.help.name).join('` `')+'`')
    .addField('**Information commands: ['+ client.informationCommands.size +']**', '`'+client.informationCommands.map(c=>c.help.name).join('` `')+'`')
    .addField('**Music commands: ['+ client.musicCommands.size +']**', '`'+client.musicCommands.map(c=>c.help.name).join('` `')+'`')
    .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
    message.channel.send({embed: RichEmbed});
    console.log(`help command has been used by ${message.author.username} in ${message.channel.guild}`);
}
if (!uwu && message.author.id == "377271843502948354") {	
    const RichEmbed = new Discord.RichEmbed()
    .setColor(`${message.member.displayHexColor}`)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .setTitle(`help for ${client.user.username}`)
    .addField('**Misc commands:**', '`'+client.miscCommands.map(c=>c.help.name).join('` `')+'`')
    .addField('**Fun commands:**', '`'+client.funCommands.map(c=>c.help.name).join('` `')+'`')
    .addField('**Moderation commands:**', '`'+client.moderationCommands.map(c=>c.help.name).join('` `')+'`')
    .addField('**Information commands:**', '`'+client.informationCommands.map(c=>c.help.name).join('` `')+'`')
	.addField('**Masters exclusive:**', '`'+client.ownerCommands.map(c=>c.help.name).join('` `')+'`')
    .addField('**Music commands:**', '`'+client.musicCommands.map(c=>c.help.name).join('` `')+'`')
    .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
    message.channel.send({embed: RichEmbed});
}

}
module.exports.help = {
    name: "help",
	alias: "h",
	type: "help"
}