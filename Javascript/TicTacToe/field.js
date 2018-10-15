class Field {
    constructor(fields) {
        this.field = fields;
    }

    generateField() {
        let container = document.getElementById("cont");

        for (let i = 0; i <= this.field.length; i++) {
            let divTag = document.createElement("div");
            divTag.setAttribute("class", "field square" + i);
            divTag.setAttribute("id", i);
            container.appendChild(divTag);
            divTag.addEventListener('click', this.playerClick, false);
        }
    }

    playerClick(square) {
        let element = document.getElementById(square.target.id);
        let imgTag = document.createElement("img");
        if (playerTurn === 0) {
            imgTag.setAttribute("src", "x.png");
            element.appendChild(imgTag);

            fields[square.target.id] = 0;

            if (GameData.checkWin()) {
                console.log("winner");
            } else {
                console.log("loser");
            }
            playerTurn = 1;
        } else {
            imgTag.setAttribute("src", "o.png");
            element.appendChild(imgTag);

            fields[square.target.id] = 1;

            if (GameData.checkWin()) {
                console.log("winner");
            } else {
                console.log("loser");
            }
            playerTurn = 0;
        }
    }
}






