const Discord = require("discord.js");

module.exports.run = async (client,message,args,serverQueue,handleVideo) => {
    if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
    if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end('stop');
    message.channel.send('Stop command has been used');
    return undefined;
}
module.exports.help = {
    name: "stop",
    type: "Music",
    info: "stops the currently playing song and empties the queue",
    perms: "MEMBER / none",
    useage: ""
  }