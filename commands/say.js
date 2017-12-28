const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
    let rawmsg = message.content.split(" ").slice(1).join(" ");
    message.channel.send(rawmsg).then(message.delete(0));
}

module.exports.help = {
    name: "say",
}