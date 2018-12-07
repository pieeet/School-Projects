const color = require("colors");
const readline = require('readline');

// TEST


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`Welcome to Shell Adventure!`.green.bold + `\n\n Type start to start the game \n Type exit anytime to quit the game`);

