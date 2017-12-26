const Discord = module.require("discord.js");
const fs = module.require("fs");
const api = "http://jsonplaceholder.typicode.com/posts";
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    snekfetch.get(api).then(r => {
        let body = r.body;
        let id = Number(args[0]);
        if(!id) return message.channel.send("Supply an ID please.");
        if(isNaN(id)) return message.channel.send("Supply a valid number.");

        let entry = body.find(post => post.id === id);
        if(!entry) return message.channel.send("This entry does not exist!");

        let embed = new Discord.RichEmbed()
            .setAuthor(entry.title)
            .setDescription(entry.body)
            .addField("Author ID", entry.userId)
            .setFooter("Post ID: " + entry.id)

        message.channel.send({embed: embed});
    });
}

module.exports.help = {
    name: "json",
}