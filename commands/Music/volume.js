const Discord = require("discord.js");

module.exports.run = async (client,message,args,serverQueue,handleVideo) => {
    const uwu = message.content.split(" ").slice(1).join(" ");
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel');
		if (!serverQueue)return message.channel.send('There is nothing playing.');
		if (!uwu){
		message.channel.send(`The current volume is: **${serverQueue.volume}**`);
		}
		if (uwu){
		if(uwu > 0 && uwu < 11){
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue)return message.channel.send('There is nothing playing.');
		serverQueue.volume = uwu;
		serverQueue.connection.dispatcher.setVolumeLogarithmic(uwu / 5);
		message.channel.send(`I set the volume to: **${uwu}**`);
		} else return message.channel.send("The volume can only be a number from 1 to 10");
	}
}
module.exports.help = {
    name: "volume",
    type: "Music",
    info: "lets users change/view the curent volume",
    perms: "MEMBER / none",
    useage: "/ {prefix}volume <num>"
  }