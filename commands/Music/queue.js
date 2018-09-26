const Discord = require("discord.js");

module.exports.run = async (client,message,args,serverQueue,handleVideo) => {
    let i = 0;
		let embed = new Discord.RichEmbed()
		.setColor(`${message.member.displayHexColor}`)
		.setFooter(`Total queue size: ${serverQueue.songs.length} songs`)
		.addField('**Song Queue:**', `${serverQueue.songs.map(song => `**[${++i}] -** ${song.title}`).slice(0, 5).join('\n')}`)
		message.channel.send(embed);
}
module.exports.help = {
    name: "queue",
    alias: "q",
    type: "Music",
    info: "lets users view the top 5 songs in the current song queue",
    perms: "MEMBER / none",
    useage: ""
  }