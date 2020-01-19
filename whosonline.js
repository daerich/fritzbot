'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const Guild = new Discord.Guild();
var configval = JSON.parse(fs.readFileSync("inc/config.json"));


class online{
  constructor(oldUser, newUser, msg){
    //var GamesList = configval.games;
  /*  this.addGames = function(msg){
      let contentInsert = msg.content.split(" ")[1];
      let
      JSON.stringify()
    } */
    this.whosPlaying = function(oldUser, newUser){
      let oldPresence = oldUser.presence;
      let newPresence = newUser.presence;
      let AnnounceRole = configval.annrole;
      let myGuild = newUser.guild;
      if(newPresence.game.type == 0 && oldPresence.game.type !== 0){
      var AnnounceChannel = myGuild.channels.get(configval.channel);
      AnnounceChannel.send( '@' + AnnounceRole + ' ' + newUser.displayName + ' just started playing ' + newPresence.game.name);
    }

}}}
exports.Online = online;
