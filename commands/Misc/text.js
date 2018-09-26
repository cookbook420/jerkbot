const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (client,message) => {
const usrstext = message.content.split(" ").slice(1).join(" ");
fs.writeFile("./textcmd.txt",(usrstext), (err) => {
if (err) console.log(err)
});
return message.delete(1000).then(async () => {
	await message.reply('I took what you typed and put it in this file for you', { file: "./textcmd.txt" });
 });

}
module.exports.help = {
    name: "text",
    alias: "txt",
    type: "Misc",
    info: "takes what a user says and makes it a .txt file",
    perms: "MEMBER | none",
    useage: "<text>"
  }