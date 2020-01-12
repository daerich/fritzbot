const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

class Janitor {
  constructor(msg) {
    var blockList = JSON.parse(fs.readFileSync('inc/blockList.json'));
      this.cleanup = function(msg){
              if(blockList.includes(msg.content.split(" "))){
                  msg.delete();
  }
}}}

module.exports = Janitor;
