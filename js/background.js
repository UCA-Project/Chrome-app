<link rel="stylesheet" href="./jsstyle.css" />

let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg","5.jpg"]
let bgImage = document.createElement('img')

let chosenImage = images[Math.floor(Math.random() * 5)]
console.log(chosenImage)
bgImage.src = `./img/${chosenImage}`
document.body.appendChild(bgImage)
document.body.style = innerWidth
console.log(bgImage)