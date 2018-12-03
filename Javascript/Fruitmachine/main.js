let slots = [];

let isRolling = false;

let points = 0;

let credits = 10;

generateImages();
fillSlotsArray();

function generateImages() {
    for(let i = 0; i < 3; i++) {
        let imgTag = document.createElement("img");
        imgTag.setAttribute("src", "./img/fruit_1.jpg");
        imgTag.setAttribute("id", i)
        let element = document.getElementById("cont");
        element.appendChild(imgTag);
    } 
}

function fillSlotsArray() {
    for (let i = 1; i <= 20; i++) {
        slots.push("fruit_" + i + ".jpg");
    }
}

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll() {
    if (!isRolling && credits > 0) {
        isRolling = true;
        document.getElementById("credits").innerHTML = "Credits: " + (credits -= 1);
        let itr = 0;
        let intervalRNG = rng(15, 50);
        let interval = setInterval(function(){
            for (let i = 0; i < 3; i++) {
                let element = document.getElementById(i);
                element.setAttribute("src", "./img/" + slots[rng(1, 19)]);              
            }
            itr++;
            if (itr === intervalRNG) {
                clearInterval(interval);
                isRolling = false;
                checkWin();
            } ;
        }, 100);
    }
}

function checkWin() {
    let gottenSlots = [];
    for (let i = 0; i < 3; i++) {
        let element = document.getElementById(i) 
        let elementAtr = element.getAttribute("src");
        gottenSlots.push(elementAtr);
    }
    if (gottenSlots.every((val, i, gottenSlots) => val === gottenSlots[0])) {
        document.getElementById("points").innerHTML = "Points: " + (points += 20);   
    } else if (gottenSlots[0] === gottenSlots[1] || gottenSlots[1] === gottenSlots[2] || gottenSlots[0] === gottenSlots[2]) {
        document.getElementById("points").innerHTML = "Points: " + (points += 4);
    }
}

function buy() {
    if (credits == 0) {
        credits = 10;
        document.getElementById("credits").innerHTML = "Credits: " + credits
    }
}