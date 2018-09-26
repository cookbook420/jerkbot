const Discord = require("discord.js");

module.exports.run = async (client,message,args,serverQueue,handleVideo) => {
    if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        message.channel.send('I resumed the music for you');
    } else {
    message.channel.send('There is nothing playing.');
    }
}
module.exports.help = {
    name: "resume",
    type: "Music",
    info: "lets users resume the crrent queue(if paused)",
    perms: "MEMBER / none",
    useage: ""
  }