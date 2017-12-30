const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
    message.guild.members.get(bot.user.id).setNickname("2D");
    message.reply("that's me.")
}

module.exports.help = {
    name: "2d",
}