const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
    function secondsToString(seconds) {
        seconds = Math.trunc(seconds)
        let numdays = Math.floor((seconds % 31536000) / 86400)
        let numhours = Math.floor(((seconds % 31536000) % 86400) / 3600)
        let numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60)
        let numseconds = (((seconds % 31536000) % 86400) % 3600) % 60
        return `${numdays}d:${numhours}h:${numminutes}m:${numseconds}s`
    };
    let embed = new Discord.MessageEmbed()
    .setAuthor("2D - The Discord Bot for Millennials",)
    .setColor("#9B59B6")
    .addField(":spy: Created By", `Blue#0026`, true)
    .addField(":robot: Version", "v0.9.4",true)
    .addField(":books: Library", "Discord.js", true)
    .addField(":shield: Guilds", bot.guilds.size, true)
    .addField(":notebook_with_decorative_cover: Channels", bot.channels.size, true)
    .addField(":busts_in_silhouette: Users", bot.users.size, true)
    .addField(":clock1: Uptime", secondsToString(process.uptime()), true)
    .addField(":globe_with_meridians: Website", "Go to [our site here.](http://2dbot.uk/)", true)
    .addField(":link: Discord", "Join our [server!](https://discord.gg/p6xsMRZ)", true)

    message.channel.send({embed: embed});
}

module.exports.help = {
    name: "info",
}