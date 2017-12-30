const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
  /*  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permissions to use this command.");
    let toBlacklist = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toBlacklist) return message.channel.send("You did not specify a user (or ID) to blacklist! `Usage: blacklist <@user>`");
    if(toBlacklist.id === message.author.id) return message.channel.send("You cannot blacklist yourself, silly.");
    if(toBlacklist.highestRole.position >= message.member.highestRole.position) return message.channel.send("Nice try, but you cannot blacklist a member with a role higher than you!");


    let role = message.guild.roles.find(r => r.name === "2D Blacklisted");
    if(!role){
        try {
            role = await message.guild.createRole({
                name: "2D Blacklisted",
                color: "#000000"
            });
            
        } catch(e) {
            console.log(e.stack);
        }
    }

    if(toBlacklist.roles.has(role.id)) return message.channel.send("This user is already blacklisted!");

    bot.blacklists[toBlacklist.id] = {
        guild: message.guild.id,
        user: toBlacklist.id,
        by: message.author.id
    }

    await toBlacklist.addRole(role);

    fs.writeFile("./blacklistedusers.json", JSON.stringify(bot.blacklists, null, 4), err => {
        if(err) throw err;
        message.channel.send("I have blacklisted the user! Be gone, abuser!");
    });

    return; */
    message.channel.send("This command is currently being created! Stay tuned!");
}

module.exports.help = {
    name: "blacklist",
}