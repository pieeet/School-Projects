//Import the discord.js module
const discord = require('discord.js');
const fs = require("fs"); //TODO New
//Call new discord.Client
const client = new discord.Client();
//Set the prefix for the commands
const prefix = '$';
//Init the commands object
let commands = {};
// //[START COMMANDS]
commands.population = require('./commands/population');
commands.comparepopulation = require('./commands/comparePopulation')

//We are lazy
commands.p = commands.population;
commands.cp = commands.comparepopulation;
//[STOP  COMMMANDS]

//Save all the commands as an array
const commandKeys = Object.keys(commands);
//Message if the bot has loaded succesfully
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Message processing
client.on('message', (msg) => {
  if(!msg.content.startsWith(prefix))
    return;
  //Process the message from the user input
  let data = msg.content.substring(prefix.length); 
  data = data.split(' ');
  //Check if the command exists
  if(!commandKeys.includes(data[0].toLowerCase()))
    return;
  //Copy the data and delete the message since you won't need a copy        
  let input = data.slice();
  input.shift();

  let name = msg.author.username;
  //Execute command
  commands[data[0]](msg,input,name);
});
//Bot token
try{
  let config = fs.readFileSync('./config.json');
  config = JSON.parse(config);
  client.login(config.token);
}catch(err){
  console.log('Can\'t read config.json');
}


