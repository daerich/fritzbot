const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const janitorclass = require("./janitorclass.js");
const Janitor = new janitorclass.Janitor();



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
else{
  Janitor.cleanup(msg);
}
});
/* client.on('message', msg => {
	if (msg == "!presence"){
    whosOnline.whosPlaying(msg);
	}
}); */

client.on('message', msg => {
      autoPurge(msg);
})


//loggin in
var contents = fs.readFileSync("inc/config.txt");
var cred = JSON.parse(contents);
//console.log(cred.token.toString());
client.login(cred.token.toString()).then(
console.log("logged in!"));
