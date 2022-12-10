let images =[
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
]

let bgimage = document.createElement("img")

let chosseimage = images[Math.float(Math.random()*images.length)]

bgimage.src = "./img/chosseimage"

document.body.appendChild(bgimage)

console.log(bgimage)

