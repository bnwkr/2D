const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating avatar...");
    let target = message.mentions.users.first() || message.author;
    if(!target) return message.channel.send("This target is not valid.");

    message.channel.send({ files: [new Discord.MessageAttachment(target.displayAvatarURL(), "avatar.png")] });

    msg.delete(); 
} 

module.exports.help = {
    name: "avatar",
}