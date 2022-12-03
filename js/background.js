let images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    Image image = bufferedImage.getScaledInstance(600, 400, Image.SCALE_DEFAULT);
]


let bgImage = document.createElement('img')

let chosenImage = images[Math.floor(Math.random() * images.length)]
console.log(chosenImage)
bgImage.src = `./img/${chosenImage}`

document.body.appendChild(bgImage)

console.log(bgImage)