let images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
]
//[1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg]
// images[0], images[1], ... images[4]

let randomImage = images[Math.floor(Math.random()*images.length)]
console.log(randomImage)

let bgImage = document.createElement("img")
bgImage.src= `./img/${randomImage}`

document.body.appendChild(bgImage)