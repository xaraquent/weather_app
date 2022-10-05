
async function getWeather() {

    const input = document.getElementById("search-bar")


    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value || "Mölndal"}&appid=fc4b84c9e65b1dfc8368ad0c040e4539&units=metric`)
    const data = await res.json()
    console.log(data)

    // ---------------- input data -------------------

    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const speedMeterPerSec = speed * 0.277777778;

    // --------------- Output data -------------------

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".weather-description").innerText = description;
    document.querySelector(".temp").innerText = Math.round(temp) + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + Math.round(speedMeterPerSec * 10) / 10 + " m/s"

    document.body.style.backgroundImage = `url('https://source.unsplash.com/2560x1440/?city+${input.value}')`
    input.value = null
}


document.querySelector(".search-button").addEventListener("click", () => {
    getWeather()
})

document.getElementById("search-bar").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        getWeather()
    }
})

getWeather()