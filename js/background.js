let images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
]
//Math.floor(Math.random()*images.length) : 0~4

let chosenImage = images[Math.floor(Math.random()*images.length)]

let bgImage = document.createElement("img")
//<img>
bgImage.src = `./img/${chosenImage}`
//<img src="./img/1.jpg">

document.body.appendChild(bgImage);


//<img src="./img/1.jpg">