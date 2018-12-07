var rp = require('request-promise');
const np = require('../util/NumberProcessing.js')

module.exports = (msg, args, name) => {
    if(args.length == 0){
        msg.channel.send(`**${name}** Please select two or more countries!`)
        return;
    }
    let urlArr = []
    for (let i = 0; i < args.length; i++){
        urlArr.push(`http://api.population.io:80/1.0/population/${encodeURIComponent(args[i])}/today-and-tomorrow`)
    }

    let output = ''
    let totalArr = []    
    rp(urlArr[0]).then((body) => {
        let data = JSON.parse(body)

        totalArr.push(data.total_population[0].population)

        output+=(`**${name}**: \`${np.commafy(totalArr[0])}\` people are living in **${args[0]}**\n`)
        return rp(urlArr[1]);
    }).then((body) => {
        let data = JSON.parse(body)

        totalArr.push(data.total_population[0].population)

        output+=(`and there are \`${np.commafy(totalArr[1])}\` people are living in **${args[1]}** right now!\n`)

        let precent = np.compare(totalArr[0],totalArr[1]);

        if(precent < 0){
            output+=(`There are \`${precent}x\` more people living in \`${args[0]}\`` )
        }else{
            output+=(`There are \`${precent}x\` more people living in \`${args[1]}\``)
        }

        
        msg.channel.send(output);
    }).catch((err) => {
        msg.channel.send('HECC')
    });
    
}

