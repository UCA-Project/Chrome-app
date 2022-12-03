let images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg", 
    "5.jpg",
]
let bgImage = document.createElement('img')
let chosenImage = images [Math.floor(Math.random() * images.length)]
bgImage.src = `./img/${chosenImage}`
document.body.appendChild(bgImage)

