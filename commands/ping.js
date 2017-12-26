const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.reply("pong!");
}

module.exports.help = {
    name: "ping",
}