'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
var configval = JSON.parse(fs.readFileSync("inc/config.json"));


class Janitor {
  constructor(msg){
      this.cleanup = function(msg){
        var blockList = configval.blockList;
      //  var blockList = ['discordapp'];
      let message = msg.content.split(" ");
      message.forEach(element => {
        if (blockList.includes(element, msg)){
            msg.delete();
        }});
      }
}}
exports.Janitor = Janitor;
