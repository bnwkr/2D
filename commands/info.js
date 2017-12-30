const Discord = module.require("discord.js");
const fs = module.require("fs");
const botSettings = require(`E:\\2D\\botsettings.json`);

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
    .addField(":robot: Version", `[${botSettings.version}](https://github.com/bluedeadpool/2D/releases)`,true)
    .addField(":book: Library", "Node / Discord.js", true)
    .addField(":joystick: Coded By", `Blue#0026`, true)
    .addField(":green_book: Servers", bot.guilds.size, true)
    .addField(":busts_in_silhouette: Users", bot.users.size, true)
    .addField(":clock1: Uptime", secondsToString(process.uptime()), true)
    .addField(":globe_with_meridians: Website", "Go to [our site here.](http://2dbot.uk/)", true)
    .addField(":link: Discord", "Join our [server!](https://discord.gg/p6xsMRZ)", true)

    message.channel.send({embed: embed});
}

module.exports.help = {
    name: "info",
}