const Neko = require("neko.js");
const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
let nekoclient = new Neko.Client(); // default api key is defaulted :D
let why = await nekoclient.why(); // logs to console a funny why joke
nekoclient.why().then(why => message.channel.send(why.why)); //sends a random why question

}
module.exports.help = {
    name: "why?"
}