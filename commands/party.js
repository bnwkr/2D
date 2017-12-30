const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
    message.guild.emojis.forEach(e => { console.log(`<a:${e.name}:${e.id}>`) })
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You need a permit to party.");
    message.channel.send("<a:blob4:395512301257752577> <a:blob1:395512301400358913> <a:blob5:395512301450428427> <a:blob2:395512301492633601>  <a:blob3:395512301714800650> <a:blob7:395512301790429195> <a:blob9:395512301911932928>  <a:blob6:395512301920452608> <a:blob8:395512302163591168> <a:wumpus1:396475025999527948><a:wumpus14:396475028729888768><a:wumpus6:396475028998455306> <a:wumpus9:396475028658716675> <a:wumpus5:396475028809580555><a:wumpus13:396475028968964098> <a:wumpus2:396475029014970378> <a:wumpus8:396475029031878656> <a:wumpus3:396475029040136192> <a:wumpus12:396475028914307073> <a:wumpus15:396475029174616084> <a:wumpus16:396475028910374924> <a:wumpus7:396475028990066692> <a:wumpus11:396475029044330517>  <a:wumpus10:396475029828927502> <a:wumpus4:396475030311141376>");
}

module.exports.help = {
    name: "party",
}