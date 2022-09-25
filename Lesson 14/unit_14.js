
const foo = (value) => {
    // debugger
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${value}&appid=8cefcfa11cb6ceb8c8de725ea1050348`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.package-name').textContent = data.name;
            document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
            document.querySelector('#one').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            document.querySelector('#two').textContent = `Wind speed: ${data.wind.speed} m/s`;
        })
        .catch(function () {
            // catch any errors
        })
}


