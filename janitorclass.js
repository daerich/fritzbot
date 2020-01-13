const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");


class Janitor {
  constructor(msg){
      this.cleanup = function(msg){
        let contents = JSON.parse(fs.readFileSync('inc/blockList.json'));
        var blockList = contents.blockList;
      //  var blockList = ['discordapp'];
      let message = msg.content.split(" ");
      message.forEach(element => {
        if (blockList.includes(element, msg)){
            msg.delete();
        }});
      }
}}
exports.Janitor = Janitor;
