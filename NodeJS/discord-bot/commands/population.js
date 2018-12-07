const request = require('request');
const np = require('../util/NumberProcessing')

module.exports = (msg, args,name) => {
    if(args.length == 0){
      msg.channel.send(`**${msg.author.name}**: Please select a country`);
      return;    
    }
    let country = args.join(' ');
    let url = `http://api.population.io:80/1.0/population/${encodeURIComponent(country)}/today-and-tomorrow`;
    request(url ,(err,res,body) => {
  
    if(err){
      msg.channel.send(`**${name}**: Could not get data from Database. Make sure to write your country with a capital letter like: Canada, Belgium`);
      return;
    }
  
    let data = JSON.parse(body);
  
    if(data.total_population == undefined){
      msg.channel.send(`**${name}**: Could not get data from Database. Make sure to write your country with a capital letter like: Canada, Belgium`);
      return;
    }
  
    let total = np.commafy(data.total_population[0].population); 
       
  
    msg.channel.send(`**${name}**: \`${total}\` people are living in **${country}** right now!`);
  
  });
  }