require('index.js');
const Guild = new Discord.Guild();
const Collection = new Discord.Collection();
const Channel = new Discord.Channel();
var blockList = new Array();

client.on('message', msg => {
if(msg.includes('.add')){
let contents = msg.split("");
let channelRaw = contents[2]
var authorID = msg.author.id
let channels = Channel.Collection.array();


var i = 0
for (i = 0; i <= channels.length(); i++){
if(channels[i] == channelRaw){
blockList.push(channelRaw)
}
}