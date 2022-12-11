const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
]

const randomNumber = Math.floor(Math.random()*images.length)
const chosenImage = images[randomNumber]

const bgImage = document.createElement("img");
/*
const newDiv = document.createElement("div");
newDiv.style.backgroundImage = `url("./img/1.jpg")`
newDiv.style.width = "100%";
newDiv.style.height = "100%";
document.body.appendChild(newDiv);
*/
document.body.style.backgroundImage = `url("./img/1.jpg")`
document.body.style.backgroundSize = "100vw 100vh";
document.body.style.backgroundRepeat = "no-repeat";
bgImage.src = `./img/${chosenImage}`
bgImage.style = "width:100px;height:100px;"
document.body.appendChild(bgImage);
console.log(bgImage)

//<img src="./img/1.jpg">
//<img src="./img/2.jpg" style="width:100%;height:100%;">
//<h1 style="color:green"></h1>