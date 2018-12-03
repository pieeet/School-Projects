let Field = {

    generateField() {
        let container = document.getElementById("cont");

        for (let i = 0; i <= fields.length; i++) {
            let divTag = document.createElement("div");
            divTag.setAttribute("class", "field square" + i);
            divTag.setAttribute("id", i);
            container.appendChild(divTag);
            divTag.addEventListener('click', this.playerClick, false);
        }
    },

    playerClick(square) {
        if (gameOver) return;
        if (GameData.checkOccupied(square.target.id)) {
            let element = document.getElementById(square.target.id);
            if (playerTurn === 0) {
                
                document.querySelector("h1").innerHTML = "Circle's turn";

                element.style.backgroundImage = "url(x.png)";

                fields[square.target.id] = 0;

                if (GameData.checkWin()) {
                    gameOver = true;
                    document.querySelector("h1").innerHTML = "Cross wins!";
                }

                if (GameData.checkDraw()) { 
                    gameOver = true;
                    document.querySelector("h1").innerHTML = "Draw!";
                }

                playerTurn = 1;
                
                Field.aiMove();
            } 
        }
    },

    aiMove: function() {

        document.querySelector("h1").innerHTML = "Cross's turn";

        let selectedMove = Computer.bestMove();
        console.log(selectedMove);
        document.getElementById(selectedMove).style.backgroundImage = "url(o.png)";
        fields[selectedMove] = 1;

        playerTurn = 0;

    }

}






