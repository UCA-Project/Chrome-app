let images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
]

let bgImage = document.createElement('img')

let chosenImage = images[Math.floor(Math.random() * images.length)]
console.log(chosenImage)
bgImage.src = `./img/${chosenImage}` //"./img/1.jpg"
bgImage.style = "width:100px;height:100px;"

document.body.appendChild(bgImage)

console.log(bgImage)
/*
<img src="./img/1.jpg" style="width:100%; height: 100%;">
*/