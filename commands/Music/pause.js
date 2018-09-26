const Discord = require("discord.js");

module.exports.run = async (client,message,args,serverQueue,handleVideo) => {
    if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        message.channel.send('I Paused the music for you');
    } else {
    message.channel.send('There is nothing playing.');
    }
}
module.exports.help = {
    name: "pause",
    type: "Music",
    info: "lets users pause the crrently playing song",
    perms: "MEMBER / none",
    useage: ""
  }