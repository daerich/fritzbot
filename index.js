'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const janitor = require('./janitorclass.js');
const Janitor = new janitor.Janitor();
const online = require('./whosonline.js');
const Online = new online.Online();


client.on("ready", () => {
    client.user.setPresence({
        game: {
            name: 'on the mainfraime',
            type: 'Playing'
        },
        status: 'idle'
    })
})
client.on('message', msg => {
	if (msg == "!test"){
		msg.channel.send("You loco?!");
	}
  if (msg == "!presence"){
    Online.whosPlaying(msg);
  }

  if (msg.content.includes("!addGame")){
    Online.addGames(msg);
  }
else {
  Janitor.cleanup(msg);
}
//debug
if (msg == "!id"){
  console.log(msg.channel.id);
  console.log(msg.channel.guild.id);
}
});
client.on("presenceUpdate", (oldUser, newUser) =>{
      Online.whosPlaying(oldUser, newUser);
})

//loggin in
var contents = fs.readFileSync("inc/config.txt");
var cred = JSON.parse(contents);
//console.log(cred.token.toString());
client.login(cred.token.toString()).then(
console.log("logged in!"));
