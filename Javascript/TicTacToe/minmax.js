const Ai = {

    minmax: function(board, player) {
        let openSpots = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < fields.length; i++) {
            if (fields[i] !== null) {
                openSpots[i] = 1;
            }
        }

        if (GameData.checkWin() && player === 0) {
            return {score: -10};
        } else if (GameData.checkWin() && player === 1) {
            return {score: 10};
        } else if (GameData.checkDraw()) {
            return {score: 0};
        }
        
        let moves = [];

        for (let i = 0; i < openSpots.length; i++) {
            if (openSpots[i] === 0) {
                let move = {};
                    move.index = board[openSpots[i]];
                
                board[openSpots[i]] = player;
                    
                if (player === 1) {
                    let result = this.minmax(board, 0);
                    move.score = result.score;
                } else {
                    let result = this.minmax(board, 1);
                    move.score = result.score;
                }

                board[openSpots[i]] = move.index;

                moves.push(move);
            }
        }

        let bestMove;
        if (player === 1) {
            let bestScore = -10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
                }
            }
        } else {
            let bestScore = 10000;
            for (var i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
                }
            }
        }
        return moves[bestMove];
    }

}
