const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let start = Date.now(); message.channel.send('Pong! ').then(message => { let diff = (Date.now() - start); return message.edit(`Pong! \`${diff}ms\``); });
}

module.exports.help = {
    name: "ping",
}