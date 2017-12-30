const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have permissions to use this command."); 

    let target = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!target) return message.channel.send("You did not specify a user (or ID) to kick! `Usage: kick <@user/ID>`");
    
    if(target.id === message.author.id) return message.channel.send("You can't kick yourself, dummy.");
    if(target.highestRole.position >= message.member.highestRole.position) return message.channel.send("Nice try, but you cannot kick a member with a role higher than you!");
    
    target.kick()
    message.channel.send("I have kicked the user! See you later, kid!");
}

module.exports.help = {
    name: "kick",
}