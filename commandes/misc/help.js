const { MessageEmbed } = require("discord.js"), 
fs = require("fs"), 
ms = require("ms"),
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };

   let config = require("../../config.json")

function update(message, db) {
    fs.writeFile(`./serveur/${message.guild.id}.json`, JSON.stringify(db), (x) => {
        if (x) console.error(x)
      });
};

module.exports.run = async (client, message, args) => {
    emojis = require("./../../emotes.json")

    if(!message.guild) return;

       let dab = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"))
   let config = require("../../config.json")

    let prefix = dab.prefix
    if (prefix === null) prefix = dab.prefix

   filter = (reaction, user) => ['1️⃣','❌'].includes(reaction.emoji.name) && user.id === message.author.id,
   dureefiltrer = response => { return response.author.id === message.author.id }; 

   const msgembed = new MessageEmbed()
   .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic: true}))
       .setTitle(`**Page d’aide**`)
   .setDescription(`<a:867324402151718932:892090597433823323> **Mon prefix sur ce serveur est**: \`${prefix}\`\n\n<:709602052216586250:892889434654113863> Veuillez réagir a la réaction \`1️⃣\` pour obtenir toute les commandes du bot\n\n**<a:megaphone:891453230561779772>Liens:**\n\n <a:797855362694774804:891459284183941170> [Support Serveur](https://discord.gg/mEBr6tzNuz)\n <a:797855362694774804:891459284183941170> [**__Invite me__**](https://discord.com/api/oauth2/authorize?client_id=867533153614692352&permissions=8&scope=bot%20applications.commands)`)
   .setImage('https://cdn.discordapp.com/attachments/894941086508802098/898914023733608468/standard_24.gif')
   .setColor(dab.color)
   .setTimestamp()  



    message.channel.send(msgembed)
    .then(async m => { 
const collector = m.createReactionCollector(filter, { time: 900000 });
collector.on('collect', async r => { m.delete()  
if(r.emoji.name === "1️⃣") {

    const msgembedee = new MessageEmbed()
    .setTitle("Mes commandes")
    .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
    //.setAuthor(client.user.username,client.user.displayAvatarURL({dynamic : true }))
    .setDescription(`> Voici mon prefix :\`${prefix}\`
    > J'ai un total de \`${client.commands.size}\` commandes !\n`)
    .addField(`<a:787506318629142528:891453513316565052>・Administration (6)`, ` \`autorole\`, \`membercount\`, \`statut\`, \`tempchannel\`, \`setlogs\`, \`embed\``)
    .addField(`<a:762429250623373333:891459288223060009>・Invitations (8)`, `\`config\`, \`add-invites\`, \`invites\`, \`remove-invites\`, \`joinchannel\`, \`joinmessage\`, \`leavechannel\`, \`leavemessage\``)
    .addField(`<:5473blurplemoderator:891453066501587005>・Modération (19)`, `\`create\`, \`nick\`, \`resetnick\`, \`slowmode\`, \`massiverole\`, \`role\`, \`deleterole\`, \`clear\`, \`dm\`, \`lock\`, \`nuke\`, \`slowmode\`, \`ban\`, \`unban\`, \`banlist\`, \`botlist\`, \`mute\`, \`unmute\`,\`voicemove\``)
    .addField(`🛡️・Anti-Raid (8)`, `\`antiping\`, \`antibot\`, \`antijoin\`, \`antilink\`, \`antitoken\`, \`antiwebhook\`, \`secur-max\`, \`secur-opti\`, \`webhook\``)
    .addField(`🎁・Giveaway (2)`, `\`gstart/gcreate\`, \`greroll\``)
    //.addField(`<:server:845283397920489542>・Backup (4)`, `\`backup create\`, \`backup remove\`, \`backup load\`, \`backup list\``)
    .addField(`🔞・Nsfw (7)`, `||\`4k\`||, ||\`anal\`||, ||\`ass\`||, ||\`boobs\`||, ||\`hentai\`||, ||\`porngif\`||, ||\`pussy\`||`)
    .addField(`${emojis.fun.coin}・Fun (19)`, `\`betrayal\`, \`fishing\`, \`yt\`, \`poker\`, \`tweet\`, \`ph\`, \`reunion\`, \`gaypic\`, \`pic\`, \`8ball\`, \`calcule\`, \`gay\`, \`fight\`, \`smoke\`, \`dance\`, \`hug\`, \`kiss\`, \`meteo\`, \`mind\`, \`wasted\``)
    .addField(`<:769926156098076702:891458085573505114>・Utilitaire (12)`, `\`dev\`, \`invite\`, \`adminlist\`, \`help\`, \`vc\`, \`snipe\`, \`emojis\`, \`serverpic\`, \`serverinfo\`, \`userinfo\`, \`channelinfo\`, \`speed\``)
    .addField(` <a:867324413267542026:892078131765190686>・Owner (8)`, `\`setcolor\`, \`setprefix\`, \`restart\`, \`leave\`,\`setactivity\`, \`setavatar\`, \`setname\`, \`serverlist\``)
    .setImage('https://cdn.discordapp.com/attachments/894941086508802098/898914023733608468/standard_24.gif')
    .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
    .setColor(dab.color)
    .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
    .setTimestamp()  

          message.lineReply(msgembedee)
} else if(r.emoji.name === '❌') {
      m.delete()
    }
});
await m.react("1️⃣") 


await m.react("❌")
    });
};


module.exports.help = {
    name: "help",
    aliases: [],
    category: 'Gestion de serveur',
    description: "- Permet d'afficher le panel de configuration de l'autorole.",
  };