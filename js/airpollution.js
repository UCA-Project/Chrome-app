const API_KEY = "65ae70e9d98ca71f0684a8bb99748e50"

function geook(place){
    const lat = place.location.latitude;
    const lon = place.location.longitude;

    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_key}`

    fetch(url).then(
        function(value){
            return value.json();
        }
        ).then(
            console.log(data)
        )
    }
}