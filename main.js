const Discord = require('discord.js')
const client = new Discord.Client()
 //Discord Bot Login
client.login('NzcxMTExNzUzMDkzNzQyNjAy.X5nXyA.ARz9NcNAQPv7Di-EOEYbjHFznd4')

//CUSTOM PLAYING STATUS (episode 9)
client.on("ready", () => {
console.log('The bot has started!')
  client.user.setActivity('something...', { type: "WATCHING"})
  
})


client.on('message', async message => {
  //SWEAR WORD FILTER (episode 12)
const swearWords = ['swear1', 'swear2']
 if(swearWords.some(word => message.content.includes(word)) ) {
message.delete()

  message.member.send('That word is not allowed!')
  
}
  

  var prefix = 'p!'
//PING COMMAND (episode 1 / episode 6)
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
  if(message.content.startsWith(`${prefix}ping`)) {
const start = Date.now()
message.channel.send("Pinging...").then(message => {

const end = Date.now()
message.edit(`:ping_pong: Ponk! Took **${(end - start)}**ms!`)
})
  }
  //DM COMMAND (episode 2)
  
  if(message.content.startsWith(`${prefix}dm`)) {
    
    message.author.send('hello world!\nthis is a new line!')
  }

  //SAY COMMAND (episode 3)
  if(message.content.startsWith(`${prefix}say`)) {
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Please give me some text to say! :)')
   message.channel.send(text)
  }
  
  //STATS COMMAND (episode 4)
  if(message.content.startsWith(`${prefix}stats`)) {
    
    var mcount = client.users.cache.size
    var scount = client.guilds.cache.size
    var tcount = client.channels.cache.filter(c => c.type === 'text').size
    var vcount = client.channels.cache.filter(c => c.type === 'voice').size
    message.reply(`${client.user.username} is on ${scount} servers with ${mcount} members, chatting on ${tcount} text channels, with ${vcount} voice channels!`)
  }

  //COINFLIP COMMAND (episode 5)
if(message.content.startsWith(`${prefix}coinflip`)) {

var choices = [
  "heads",
  "tails"
];

 var output = choices[Math.floor(Math.random()*choices.length)];
  
  message.channel.send(`You got **${output}!**`);
  
}

  //DIE COMMAND / RESTART COMMAND (episode 7)
  if(message.content.startsWith(`${prefix}die`)) {
  let devs = ['339177677326123018', '601420236335480842'] //CHANGE THIS TO YOUR ID(S)
  
  if(!devs.includes(message.author.id)) {
return true
} else {
process.exit()
}
  
  }
  
  //TESTING COMMAND (episode 7)
    if(message.content.startsWith(`${prefix}beep`)) {
      message.reply('baap')
    }
  
  //SLOWMODE COMMAND (episode 8)
   if(message.content.startsWith(`${prefix}slowmode`)) {
    var time = message.content.split(' ').slice(1).join(' ')
    if(!time) return message.reply('Please enter a time in seconds!')
   message.channel.setRateLimitPerUser(time)
     message.channel.send('Set the slowmode!')
  }
  
  //SUB COUNT COMMAND (episode 11)
  if(message.content.startsWith(`${prefix}subc`)) {
    
    var request = require('request')
    var id = 'UCA3QtGSDbBoS5ogCitr_KQw'
    var key= process.env.YT_KEY
    
    var url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + id + "&key=" + key;
    
    request({
      method: 'GET',
      url: url
    }, function (err, response, text) {
if(err) {
return
}
      
      var json = JSON.parse(text);
      var subc = json.items[0].statistics.subscriberCount
message.channel.send(`${subc} is how many subs that channel has!`)
      }) }
  
  // LYRICS FINDER COMMAND (ep 13)
  if(message.content.startsWith(`${prefix}lyrics`)) {
   const genius = require("genius-lyrics")
   const G = new genius.Client(process.env.GENIUS)
    
   G.tracks.search(message.content.split(' ').slice(1).join(' '), {limit: 1})
   .then(results => {
const song = results[0]
message.channel.send(`**${song.artist.name} - ${song.title}**\n<${song.url}>`) //song.lyrics
})
    .catch(err => message.reply(err))
  }
 // MINESWEEPER COMMAND (ep 14)
  if(message.content.startsWith(`${prefix}mine`)) {
  const Minesweeper = require('discord.js-minesweeper');
    
    const minesweeper = new Minesweeper({
      returnType: 'emoji'
    });
    var mines = minesweeper.start()
    message.channel.send(mines)
  
  
  }
  
  // VERIFY COMMAND (ep 15)
  
if(message.content.startsWith(`${prefix}verify`)) {

  message.member.roles.add("738168191787860089").then(
  message.react('✔')
  ).catch(err => console.log(err)) 

}
  
})