const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
    message.channel.send("You can view 2D's current commands here: http://2dbot.uk/#commands");
}

module.exports.help = {
    name: "help",
}