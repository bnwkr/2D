const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
    message.guild.members.get(bot.user.id).setNickname("ass");
    message.reply("ass.");
}

module.exports.help = {
    name: "ass",
}