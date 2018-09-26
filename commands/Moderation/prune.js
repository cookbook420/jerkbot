const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
var neko = message.guild.members.find("id", "377271843502948354");
if (!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id !== "377271843502948354")return message.reply('you need to have the ``"MANAGE_MESSAGES"`` permission to use this command');
message.delete(500);
const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if (!amount) return message.reply('Must specify an amount to delete!');
if (!amount && !user) return message.reply('You must specify a user and amount, or just an amount, of messages to purge');
message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : bot.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 message.channel.send(`**${message.member.displayName}** pruned ${amount} messages from ${message.mentions.members.first().displayName}`).then(msg=>{msg.delete(15000)});
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
 message.channel.send(`**${message.member.displayName}** pruned ${amount} messages`).then(msg=>{msg.delete(15000)});
}); 
}

module.exports.help = {
    name: "prune",
	type: "Mod",
	info: "prunes messages in a server",
	perms: "MANAGE_MESSAGES",
	useage: "@user <Amount>/ --prune <amount>"
}