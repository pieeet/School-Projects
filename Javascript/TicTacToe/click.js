let winState;
let GameData = {

    checkWin: function() {
        winState = true;
        for(let i = 0; i < wins.length; i++) {
            console.log(wins[i]);
            console.log(fields);
            for (let j = 0; j < wins[i].length; j++) {
                console.log("Fields wins: " + fields[wins[i][j]] + " / Player turn: " + playerTurn);
                if (fields[wins[i][j]] !== playerTurn) {
                    winState = false;
                    console.log("turned winstate to false.");
                } else {
                    console.log("winstate still true");
                }
            }
            if (winState) return winState;
        } 
        //return winState;      
    }
}

