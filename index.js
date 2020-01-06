const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
//end of prerequisites

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
	if (msg == "!gay"){
		msg.channel.send("You loco?!");
	}
});


//loggin in
var contents = fs.readFileSync("inc/config.txt");
var cred = JSON.parse(contents);
//console.log(cred.token.toString());
client.login(cred.token.toString()).then(
console.log("logged in!"));
