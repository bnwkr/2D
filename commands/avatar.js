module.exports.run = async (bot, message, args) => {
  /*  let msg = await message.channel.send("Generating avatar...");
    let target = message.mentions.users.first() || message.author;
    if(!target) return message.channel.send("This target is not valid.");

    message.channel.send({files: [
        {
            attachment: target.displayAvatarURL,
            name: "avatar.png"
        }
    ]});

    msg.delete(); */
    message.channel.send("This command is currently under maintenance.");
} 

module.exports.help = {
    name: "avatar",
}