const Discord = require("discord.js");

module.exports.run = async (client,message) => {
	
  if(!message.member.hasPermission("KICK_MEMBERS") && mesage.author.id !== "377271843502948354")return message.reply("you have to have the `KICK_MEMBERS` permission to use this command");
  if(!message.guild.members.get(client.user.id).hasPermission("KICK_MEMBERS"))return message.channel.send('I need the ``"KICK_MEMBERS"`` permission to use this');
  
  let usr = message.content.split(' ').slice(1,2).join(' ');
  let wmem = message.mentions.members.first()||message.guild.member.get(usr);
  if(!wmem) return message.reply("I couldn't find that member");
  
  let reason = message.content.split(' ').slice(2).join(' ');

if (reason) {
wmem.kick(reason);
}
if (!reason) {
wmem.kick();
}

message.channel.send(`${message.member.displayName} has kicked ${wmem.displayName}`).then(msg => {msg.delete(5000)});


}
module.exports.help = {
    name: "kick"
}