const API_key = "478367118da10c29a1344bc1ac9fea87"

function onGeoOk(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    console.log("당신이 있는 곳은", lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`

    fetch(url).then(
        function(response){
            return response.json();
        }
        
    ).then(
        function(data){
            const city = data.name
            const weather = data.weather[0].main
            const cityHTML = document.querySelector("#city")
            const weatherHTML = document.querySelector("#weather")

            cityHTML.innerText = city;
            weatherHTML.innerText = weather;
        }
    )
}
function onGeoError(err) {
    alaert("Error!")
    console.log(err)
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
