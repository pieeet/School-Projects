let GameData = {

    checkWin: function() {
        for(let i = 0; i < wins.length; i++) {
            let winState = true;
            for (let j = 0; j < wins[i].length; j++) {
                if (fields[wins[i][j]] != playerTurn) {
                    winState = false;
                }
            }
            if (winState) return winState;
        }
        return winState;      
    },

    checkDraw: function() {
        let isDraw = true;
        if (!GameData.checkWin()) {
            for (let i = 0; i < fields.length; i++) {
                if (fields[i] === null) {
                    isDraw = false;
                    break;
                }
            }
            return isDraw;
        }
    },

    checkOccupied: function(square) {
        if (fields[square] !== null) {
            return false;
        } else {
            return true;
        }
    }
}


