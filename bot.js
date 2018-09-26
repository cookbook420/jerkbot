const Util = require("discord.js");
const Discord = require("discord.js");
const fs = require('fs');
const ytdl = require('ytdl-core');

const { TOKEN } = require('./config');

const prefixes = require('./jsons/prefixes.json');

const client = new Discord.Client();
require('./util/cmdloader.js')(client);

const queue = new Map();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log(`Running ${client.user.username} on the following servers: \n\n${client.guilds.map(g => `${g.name} - ${g.memberCount} Members`).join(`\n`)}`));

  client.on('ready', () => {
	client.user.setActivity(`with ${client.users.size} fuqboiis`, { type: "PLAYING" });
    setTimeout(game2, 30000)
});

function game1() {
    client.user.setActivity(`with ${client.users.size} fuqboiis`, { type: "PLAYING" });
    setTimeout(game2, 30000)
}

function game2() {
    client.user.setActivity(`Want to know my prefix for a server?, use /prefix to find out`, { type: "PLAYING" });
    setTimeout(game3, 30000)
}

function game3() {
   client.user.setActivity(`My default prefix is /`, { type: "PLAYING" });
    setTimeout(game4, 30000);
}
function game4() {
   client.user.setActivity(`HentaiHaven`, { type: "WATCHING" });
    setTimeout(game1, 300000);
}

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('resume', () => console.log('I have reconnected!'));

client.on('message', async message => { 
	if(message.author.bot)return;
	if(message.content.startsWith("-") && message.channel.type !== "text")return mesage.reply("Please use my commands in a server");
	
	if(!prefixes[message.guild.id]){
		prefixes[message.guild.id] = {
			prefixes: "/"
		}
	}

  let prefix = prefixes[message.guild.id].prefixes;
  
  if(message.content.startsWith(prefix) && client.user.presence.status === "invisible"){
	  if(message.author.id !== '377271843502948354')return;
  }

  if (message.content == ("/prefix")){
	  message.channel.send('The prefix for this server is: ``'+ prefix +'``');
  }
  
  if(!message.content.startsWith(prefix))return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  const serverQueue = queue.get(message.guild.id);
	
async function handleVideo(video, message, voiceChannel, playlist = false) {
	const serverQueue = queue.get(message.guild.id);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);
		queueConstruct.songs.push(video);
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			queue.delete(message.guild.id);
			return message.channel.send(`I could not join the voice channel:\nERROR:\n${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		if (playlist)return;
		else return message.channel.send(` **${song.title}** has been added to the queue!`);
	}
	return;
}
function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url), { audioonly: true })
		.on('end', reason => {
			if(reason == 'skip'||'stop'){
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
			} else {
			message.channel.send('Song ended');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
			}
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
	serverQueue.textChannel.send(`Started playing: **${song.title}**`);
}

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  let alias = client.aliases.get(cmd.slice(prefix.length));
  if(commandfile){
	  commandfile.run(client,message,args,serverQueue,handleVideo);
  }
  if(alias){
	  alias.run(client,message,args,serverQueue,handleVideo);
  }
});
client.login(TOKEN);