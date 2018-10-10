/**
 * Create the chessboard
 */
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let divTag = document.createElement("div");
        let element = document.getElementById("container");
        
        if ((i + j) % 2 === 0) {
            divTag.setAttribute("class", "white-square");
            divTag.setAttribute("id", i + "_" + j);
            divTag.setAttribute("x", i + "");
            divTag.setAttribute("y", j + "");
            element.appendChild(divTag);
        } else {
            divTag.setAttribute("class", "black-square");
            divTag.setAttribute("id", i + "_" + j);
            divTag.setAttribute("x", i + "");
            divTag.setAttribute("y", j + "");
            element.appendChild(divTag);  
        }
    }
}

let whitePieces = {
    king: "images/pieces/king_white.png",
    queen: "images/pieces/queen_white.png",
    rook: "images/pieces/rook_white.png",
    bishop: "images/pieces/bishop_white.png",
    knight: "images/pieces/knight_white.png",
    pawn: "images/pieces/pawn_white.png"
}

let blackPieces = {
    king: "images/pieces/king_black.png",
    queen: "images/pieces/queen_black.png",
    rook: "images/pieces/rook_black.png",
    bishop: "images/pieces/bishop_black.png",
    knight: "images/pieces/knight_black.png",
    pawn: "images/pieces/pawn_black.png"
}

initGame();

/**
 * Render in all the pieces
 */
function initGame() {
    for (let i = 0; i < 8; i++) { //Check x 
        for (let j = 0; j < 8; j++) { //Check y
            let square = document.getElementById(i + "_" + j); //Get each square
            let squareX = square.getAttribute("x"); //Get its x value
            let squareY = square.getAttribute("y"); //And its y value

            let imgTag = document.createElement("img"); //Create an img node
            
            if (squareX == 0) { //Check what kind of piece needs to go on that square
                if(squareY == 0 || squareY == 7) {
                    imgTag.setAttribute("src", blackPieces.rook);
                    imgTag.setAttribute("class", "piece")
                    square.appendChild(imgTag);  

                } else if (squareY == 1 || squareY == 6) {       
                    imgTag.setAttribute("src", blackPieces.knight);
                    imgTag.setAttribute("class", "piece")
                    square.appendChild(imgTag);

                } else if (squareY == 2 || squareY == 5) {
                    imgTag.setAttribute("src", blackPieces.bishop);
                    imgTag.setAttribute("class", "piece")
                    square.appendChild(imgTag);
                } else if (squareY == 3) {
                    imgTag.setAttribute("src", blackPieces.queen);
                    imgTag.setAttribute("class", "piece")
                    square.appendChild(imgTag);
                } else {
                    imgTag.setAttribute("src", blackPieces.king);
                    imgTag.setAttribute("class", "piece")
                    square.appendChild(imgTag); 
                }

            } else if (squareX == 1) {
               imgTag.setAttribute("src", blackPieces.pawn);
               imgTag.setAttribute("class", "piece")
               square.appendChild(imgTag);
            } else if (squareX == 6) {
                imgTag.setAttribute("src", whitePieces.pawn);
                imgTag.setAttribute("class", "piece")
                square.appendChild(imgTag);
            } else if (squareX == 7) {
                if(squareY == 0 || squareY == 7) {
                    imgTag.setAttribute("src", whitePieces.rook);
                    imgTag.setAttribute("class", "piece")
                    square.appendChild(imgTag);  

                } else if (squareY == 1 || squareY == 6) {       
                    imgTag.setAttribute("src", whitePieces.knight);
                    imgTag.setAttribute("class", "piece")
                    square.appendChild(imgTag);

                } else if (squareY == 2 || squareY == 5) {
                    imgTag.setAttribute("src", whitePieces.bishop);
                    imgTag.setAttribute("class", "piece")
                    square.appendChild(imgTag);
                } else if (squareY == 3) {
                    imgTag.setAttribute("src", whitePieces.queen);
                    imgTag.setAttribute("class", "piece")
                    square.appendChild(imgTag);
                } else {
                    imgTag.setAttribute("src", whitePieces.king);
                    imgTag.setAttribute("class", "piece")
                    square.appendChild(imgTag); 
                }
            }
        }
    }
    checkSquareOccupation();
}

function checkSquareOccupation() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++ ) {
            let square = document.getElementById(i + "_" + j);
            let squareChild = square.firstChild.nodeName;
            console.log("hello");

            if (squareChild === "img") {
                square.setAttribute("occupied", "true");
            } else {
                square.removeAttribute("occupied");
            }
        }
    }
}