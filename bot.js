const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;
const token = botSettings.token;
const fs = require("fs");

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
bot.mutes = require("./mutes.json");

fs.readdir("./commands/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", () => {
    console.log(`Bot is ready!`);
    console.log(`Bot Name: `+ `${bot.user.username}`);

    bot.setInterval(() => {
        for(let i in bot.mutes) {
            let time = bot.mutes[i].time;
            let guildId = bot.mutes[i].guild;
            let guild = bot.guilds.get(guildId);
            let member = guild.members.get(i);
            let mutedRole = guild.roles.find(r => r.name === "2D Muted");
            if(!mutedRole) continue;

            if(Date.now() > time) {

                member.removeRole(mutedRole);
                delete bot.mutes[i];

                fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
                    if(err) throw err;
                    console.log(`${member.user.tag}'s mute has expired.`);
                })
            }
        }
    }, 5000)

    bot.generateInvite(["ADMINISTRATOR"]).then(link => {
        console.log("Invite Link: " + link);
    }).catch(err => {
        console.log(err.stack);
    });
    //function serverUpdate(){
        //bot.user.setGame(bot.guilds.size + ' Servers | ' + prefix + 'help');
    //}
    //setInterval(serverUpdate, 5000);
    let i = 0
    setInterval(() => {
        const presenceUsers = ['in ' + bot.guilds.size + ' Guilds | ' + prefix + 'help', {type: 'PLAYING'}];
        const presenceGuilds = [bot.users.size + ' Users | ' + prefix + 'help', {type: 'WATCHING'}];
        const presenceSite = ['on 2dbot.uk | ' + prefix + 'help', {type: 'PLAYING'}];
        const presences = [presenceUsers, presenceGuilds, presenceSite];
        bot.user.setActivity(...presences[i]);
        if (presences[i+1]) i++;
        else i = 0;
    }, 10000);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);

});

bot.login(token);
