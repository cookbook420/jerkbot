const Discord = require("discord.js");
const YouTube = require('simple-youtube-api');
const { GOOGLE_API_KEY } = require('../../config.js');
const youtube = new YouTube(GOOGLE_API_KEY);

module.exports.run = async (client,message,args,serverQueue,handleVideo) => {
  const searchString = message.content.split(" ").slice(1).join(" ");
  const url = message.content.split(" ").slice(1).join(" ");
  
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music');
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) {
        return message.channel.send('I can\`t connect to your voice channel, please make sure I have the proper permissions and try again');
    }
    if (!permissions.has('SPEAK')) {
        return message.channel.send('I can\`t speak in this voice channel, please make sure I have the proper permissions and try again');
    }
    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
        const playlist = await youtube.getPlaylist(url);
        const videos = await playlist.getVideos();
        for (const video of Object.values(videos)) {
            const video2 = await youtube.getVideoByID(video.id);
            await handleVideo(video2, message, voiceChannel, true); 
        }
        message.channel.send(`Playlist: **${playlist.title}** has been added to the queue`);	
    } else {
        try {
            var video = await youtube.getVideo(url);
        } catch (error) {
            try {
                var videos = await youtube.searchVideos(searchString, 10);
                let index = 0;
                let bed = new Discord.RichEmbed()
                .setTitle(`Song selection:`)
                .setColor(`${message.member.displayHexColor}`)
                .setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
                .setFooter(`Please provide a value from 1-10.`, `${message.author.avatarURL}`)
                message.channel.send({embed: bed}).then(msg => {msg.delete(30000)});
                try {
                    var response = await message.channel.awaitMessages(msg2 => msg2.content>0||msg2.content<11 && message.author.id===msg2.author.id, {
                        maxMatches: 1,
                        time: 20000,
                        errors: ['time']
                    });
                } catch (err) {
                    console.error(err);
                    return message.channel.send('No or invalid value entered, cancelling video selection.');
                }
                const videoIndex = parseInt(response.first().content);
                var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
            } catch (err) {
                console.error(err);
                return message.channel.send('I couldn\`t find any search results.');
            }
        }
        return handleVideo(video, message, voiceChannel);
    }

}
module.exports.help = {
    name: "play",
	alias: "p",
    type: "Music",
    info: "plays music in a voice channel",
    perms: "MEMBER / none",
    useage: "(song name/link)"
  }