function onGeoOK(pos){
    alert("정상적으로 받아옴")
    console.log(pos)
    let lat = pos.coords.latitude
    let long = pos.coords.longitude
    let appid = "7e2bafaadae93414ad67ea208bf1e864"
    let cityHTML = document.querySelector(#city)
    let weatherHTML = document.querySelector(#weather)
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${appid}`

    fetch(url).then(
        function(response){
            return response.json()
        }
    ).then(
        function (data){
            let weather = data.weather[0].main
            let city = data.name
            cityHTML.innerHTML = city
            weatherHTML.innerHTML = weather
        }
    )
}
function onGeoAlert(){
    alert("에러남!")
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoAlert)
//인자 1 : 현재 위치에 대해 정상적으로 받아왔을 때 싵행하는 함수
//인자 2 : 받아왔을 때 오류가 생겼을 때 실행하는 함수
