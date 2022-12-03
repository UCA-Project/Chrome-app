const API_key = "f2390d16769038dc5b071acaa9d9d56a"

function onGeoOk(position) {
    const lat = position.coords.latitude // 위도
    const lon = position.coords.longitude // 경도
    console.log("당신이 있는 곳은", lat, lon);

    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API key}'

    fetch(url).then(
        function (response) {
            return response.json();
        }
    ).then(
        function (data) {
            const city = data.name
            const weather = data.weather[0].main
            const cityHTML = document.querySelector("#city")
            const weatherHTML = document.querySelector("#weather")

            cityHTML.innerText = city;
            weatherHTML.innerText = weather;
        }
    )
}

function onGeoError() {
    alert("Error!")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)


/*
function a(e) {
    e.preventDefault()
}

*/
