let randomHex = function(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
 }
let Discord = require('discord.js');
module.exports.run = async (client,message,args) => {
	
        let embed = new Discord.RichEmbed()
        .setColor(randomHex())
        .setTitle(randomHex())
        message.channel.send(embed);
        
}
module.exports.help = {
    name: "randomcolor",
    alias: "randomhex"
}