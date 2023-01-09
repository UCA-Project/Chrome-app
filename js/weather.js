const API_KEY = "d6e91f20e423cf23201c29164df6ef44";

function onGeoOk(position){
    console.log("정상")
    console.log(position)
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    console.log("you live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    
    fetch(url).then(
        function(response){
            return response.json();
        }
    ).then(
        function(data) {
            const weather = data.weather[0].main
            const city = data.name;
            
            console.log(weather, city);
        }
    )
}

function onGeoError(){
    console.log("에러")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



// addEventListener("click", a)