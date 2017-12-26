const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permissions to use this command.");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.send("You did not specify a user (or ID) to mute!");

    if(toMute.id === message.author.id) return message.channel.send("You cannot mute yourself, silly.");
    if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("Nice try, but you cannot mute a member with a role higher than you!");


    let role = message.guild.roles.find(r => r.name === "2D Muted");

    if(!role || !toMute.roles.has(role.id)) return message.channel.send("This user is not muted!");

    await toMute.removeRole(role);

    delete bot.mutes[toMute.id];
    message.channel.send(`${toMute.user.tag} has been unmuted.`);
    fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
        if(err) throw err;
    })
    return;
}

module.exports.help = {
    name: "unmute",
}