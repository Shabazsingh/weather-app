// Define your OpenWeatherMap API key
const apiKey = "33e70b424332accb9db369391c2b9798";

const api = `https://api.openweathermap.org/data/2.5/weather?&lat=43.642567&lon=-79.387054&units=metric&appid=${apiKey}`;

let weatherBtn = document.querySelector("#weather-button")

weatherBtn.addEventListener("click", function () {
    document.querySelector(".weather-info").style.display = "block"

    $.getJSON(api, function (data) {
        $('#temperature').html(`${data.main.temp}°`);
        console.log(data)
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        $("#icon").attr('src', `${iconUrl}`)

        $("#weather-conditions").html(`${data.weather[0].description}`)
        $("#location").html(`${data.name}`)

    }).fail(function (jqXHR, textStatus, errorThrown) {
        // Error handler for the request
        console.error(`Request failed: ${textStatus}, ${errorThrown}`);
    });
})
