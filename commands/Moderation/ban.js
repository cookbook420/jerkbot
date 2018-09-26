const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
let ugu = message.content.split(" ").slice(1).join(" ");
let wmem = message.mentions.members.first()||message.guild.members.get(ugu);
	  
  if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "377271843502948354")return message.reply('you have to have the `"BAN_MEMBERS"` permission to use this command');
  if(!wmem)return message.reply("I couldn't find that member");
  if(wmem.user.id === "377271843502948354")return message.reply("i won't ban my master");
  let reason = message.content.split(" ").slice(2).join(" ");

if (reason) {
wmem.ban(reason);
}
if (!reason) {
wmem.ban();
}

message.channel.send(`${message.member.displayName} has banned ${wmem.displayName}`);



}
module.exports.help = {
name: "ban",
type: "Mod",
info: "Bans a user from the server",
perms: "BAN_MEMBER",
useage: `@user / {prefix}ban @user <reason>`
}