const Discord = require("discord.js");

module.exports.run = async (client,message,args,serverQueue,handleVideo) => {
    const parsetime = function(milliseconds) {
        var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
        var minutes = Math.floor(seconds/60); seconds %= 60;
        var hours = Math.floor(minutes/60); minutes %= 60;
        var days = Math.floor(hours/24); hours %= 24;
        var written = false;
        return(days?(written=true,days+"D"):"")+(written?":":"")
          +(hours?(written=true,hours+"H"):"")+(written?":":"")
          +(minutes?(written=true,minutes+"M"):"")+(written?":":"")
          +(seconds?(written=true,seconds+"S"):"")+(written?"":"");
    };
    let elapsd = parsetime(`${serverQueue.connection.dispatcher.totalStreamTime}`);
            let embed = new Discord.RichEmbed()
            .setColor(`${message.member.displayHexColor}`)
            .setThumbnail(`https://i.ytimg.com/vi/${serverQueue.songs[0].id}/maxresdefault.jpg`)
            .setTimestamp()
            .setFooter(`Elapsed time: ${elapsd}`)
            .addField("**Now Playing:**", `[${serverQueue.songs[0].title}](https://youtube.com/watch?v=${serverQueue.songs[0].id})`)
            message.channel.send({embed});
}
module.exports.help = {
    name: "nowplaying",
    alias: "np",
    type: "Music",
    info: "lets users view the currently playing song",
    perms: "MEMBER / none",
    useage: ""
  }