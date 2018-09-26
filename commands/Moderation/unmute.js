const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client,message) => {
  
  let ppl = message.content.split(' ').slice(1,2).join(' ');
  if(!ppl||ppl === "help"){
    let embed = new Discord.RichEmbed()
    .setTitle('How to use the unmute command:')
    .setDescription('This is a moderation command used to unmute users(make it so they can type again in text channels)')
    .setColor(`${message.member.displayHexColor}`)
    .setTimestamp()
    .addField('**Command usages:**', `\`\`\`css\n${prefix}unmute @user\n${prefix}unmute <user.id>\`\`\``)
    .addField('**Permission(s) required:**', '``"MANAGE_ROLES"``')
    message.channel.send(embed);
  }
  if(!message.member.hasPermission("MANAGE_ROLES") && message.author.id !== "377271843502948354")return message.channel.send('You need the ``"MANAGE_ROLES"`` permission to use this');
  if(!message.guild.members.get(client.user.id).hasPermission("MANAGE_ROLES"))return message.channel.send('I need the ``"MANAGE_ROLES"`` permission to use this');
  let tomute = message.mentions.members.first()||message.guild.members.get(ppl);
  if(!tomute) return message.reply("Couldn't find that user.");

  let muteRole = guildconfig[message.guild.id].mrole; 
  let muterole = message.guild.roles.find(`name`, muteRole);
  if(!muterole){
    message.channel.send(`There isn't a muteRole set for this server\nIf you'd like me to make one and set it, use the \`create\` command.\nIf you'd like to set the muteRole yourself, use the \`set\` command`);
  }

  if(!tomute.roles.has(muterole.id))return message.channel.send("that person isn't muted");
  if(tomute.roles.has(muterole.id)){
	  tomute.removeRole(muterole);
	  message.channel.send(`${tomute.displayName} has been unmuted`);
  }  

      
}
module.exports.help = {
    name: "unmute"
}