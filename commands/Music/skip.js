const Discord = require("discord.js");

module.exports.run = async (client,message,args,serverQueue,handleVideo) => {
    if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
    if (!serverQueue)return message.channel.send('There is nothing playing that I could skip for you.');
    serverQueue.connection.dispatcher.end('skip');
    message.channel.send('Skip command has been used');
    return undefined;
}
module.exports.help = {
    name: "skip",
    type: "Music",
    info: "skips the currently playing song",
    perms: "MEMBER / none",
    useage: ""
  }