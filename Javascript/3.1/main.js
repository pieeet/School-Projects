let images = []; //maak een array images

//vul de array met alle images (ik was te lui om ze handmatig in te voegen)
for (let i = 0; i < 9; i++) {
    images.push("img" + i + ".jpeg");
}

//Pak het aantal images
let arrayCheck = images.length;

//Check of er nog array items geshuffled moet worden
while (arrayCheck > 0) {
    index = Math.floor(Math.random() * arrayCheck); //random nummer

    arrayCheck-- //haal eentje af van arrayCheck

    //En verwissel er een item mee
    temp = images[arrayCheck];
    images[arrayCheck] = images[index];
    images[index] = temp;

    //plaats de image met de correcte attribute
    let imagesTag = document.createElement("img");
    let element = document.getElementById("base");
    imagesTag.setAttribute("src", images[arrayCheck]);
    element.appendChild(imagesTag);
}
