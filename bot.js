const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526701519324577832")
setInterval(function() {
channel.send(`هنا كلام ال سبام`);
}, 30)
})

client.login("NTE4NDg3MzAxOTk5OTUxODcz.DwJA6w._BJATa7XeZDwYnIQhmhehH8PT3A");
