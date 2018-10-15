

let fields = [null, null, null, null, null, null, null, null, null];
let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let playerTurn = 0;
let isWinner = null;

function init() {
    let field = new Field(fields);
    field.generateField();
}
init();

