let questions = [
    "What is your name?",
    "What is your fav hobby?",
    "What is your fav food?"
]

let answers = [];

function ask(i) {

    process.stdout.write(`\n\n\n\n${questions[i]}`);
    process.stdout.write("  >  ");

}

process.stdin.on('data', (data) => {
    
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {

        ask(answers.length);

    } else {

        process.exit();

    }

});

process.on('exit', () => {

    process.stdout.write("\n\n\n\n");

    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish eating ${answers[2]} later.`)

    process.stdout.write("\n\n\n\n");

});

ask(0);