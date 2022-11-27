let images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg" 
]
let chosen = images[Math.floor(Math.random()*images.length)]

let bgImage = document.createElement("img")
bgImage.src = `./img/${chosen}`

document.body.appendChild(bgImage)