'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const Guild = new Discord.Guild();
var configval = JSON.parse(fs.readFileSync("inc/config.json"));


class online{
  constructor(oldUser, newUser, msg){
    //var GamesList = configval.games;

    this.setPerms = function(msg){
        let cmdlst = msg.content.split(" ");
        cmd
    }
    this.whosPlaying = function(oldUser, newUser){
      let oldPresence = oldUser.presence;
      let newPresence = newUser.presence;
      let AnnounceRole = configval.annrole;
      let myGuild = newUser.guild;
        if(newPresence.game.assets.largeText !== oldPresence.game.assets.largeText){
      var AnnounceChannel = myGuild.channels.get(configval.channel);
      AnnounceChannel.send( '@' + AnnounceRole + ' ' + newUser.displayName + ' just started playing ' + newPresence.assets.largeText + '!');
    }
}}}
exports.Online = online;
