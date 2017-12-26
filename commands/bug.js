const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
    message.channel.send("Please report all bugs here for now: https://github.com/BlueDeadpool/2D/issues");
}

module.exports.help = {
    name: "bug",
}