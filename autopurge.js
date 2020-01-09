const Discord = require('discord.js');
const client = new Discord.Client();
const Guild = new Discord.Guild();
const Collection = new Discord.Collection();
const Channel = new Discord.Channel();
var blockList = new Array();

module.exports = setPurge;

function setPurge(msg){
  if(msg.content.includes('!add')){
  let contents = msg.content.split(" ");
  let channelRaw = contents[1];
  let authorID = msg.author.id;
//  let channels = Guild.Channel.Collection.array();
  console.log(channelRaw);


  /*let i = 0;
  for (i = 0; i <= channels.length(); i++){
  if(channels[i] == channelRaw){
  blockList.push(channelRaw);
  console.log(blockList.toString()); */
}}
