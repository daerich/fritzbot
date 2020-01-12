const Discord = require('discord.js');
const client = new Discord.Client();
const Collection = new Discord.Collection();
const map = new Map();
const Guild = new Discord.Guild();


class online{
  constructor(msg){
    var onlinePlayers =  new Array();
    this.whosPlaying = function (msg){
    let presences = msg.guild.presences;
    console.log(Array.from(presences.values()));

    /*for(const value of presences){
      if(presences.values().status = "online"){
        onlinePlayers.push(Array.from(presences.keys));
        console.log(onlinePlayers.toString());
      }

    } */
  // console.log(Array.from(msg.guild.presences));
  // console.log(Array.from(members));
}}
}
module.exports = online;
