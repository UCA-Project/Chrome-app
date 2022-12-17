const API_KEY = "65ae70e9d98ca71f0684a8bb99748e50";

function ongeoerror(){
    alert("can't find you")
}

function ongeook(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in",lat,lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    fetch(url).then(
        function (response){
            return response.json();
        }
    ).then(
        function (data){
            localhtml.innerText = data.name;
            weatherhtml.innerText = data.weather[0].main;
        }
    )
}

navigator.geolocation.getCurrentPosition(ongeook, ongeoerror);

const localhtml = document.querySelector("#local");
const weatherhtml = document.querySelector("#weather");

