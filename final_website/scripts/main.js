const lat = '33.1581'; // Replace with desired latitude
const lon = '-117.3506'; // Replace with desired longitude
const exclude = 'hourly'; // Replace with desired part to exclude
const apiKey = '7be467cddb4e374f87db7a311fc5903e'; // Replace with your API key

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=7be467cddb4e374f87db7a311fc5903e&units=imperial`;

async function getWeatherData() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        const temp = data.main.temp;
        const desc = data.weather[0].description;
        const humidity = data.main.humidity;


        document.getElementById("temp").textContent = `Temperature: ${temp} K`;
        document.getElementById("desc").textContent = `Description: ${desc}`;
        document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
    } catch (error) {
        console.error(error);
    }}

    async function getWeatherForecast() {
        const lat = 33.1581; // latitude of Carlsbad, California
        const lon = -117.3506; // longitude of Carlsbad, California
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7be467cddb4e374f87db7a311fc5903e&units=imperial`;
      
        try {
            const response = await fetch(url);
            const data = await response.json();
        
            // extract the next 3 days of weather forecast data
            const forecast = data.list.filter((item) =>
              item.dt_txt.includes("12:00:00")
            ).slice(0, 3);
        
            // update the HTML page with the forecast data
            const forecastContainer = document.getElementById("forecast");
            forecastContainer.innerHTML = ""; // clear any previous content
        
            forecast.forEach((item) => {
              const forecastItem = document.createElement("div");
              forecastItem.classList.add("forecast-item");
              forecastItem.innerHTML = `
                <div class="date">${item.dt_txt}</div>
                <div class="description">${item.weather[0].description}</div>
                <div class="temperature">${Math.round(item.main.temp)}&deg;F</div>
              `;
              forecastContainer.appendChild(forecastItem);
            });
          } catch (error) {
            console.error(error);
          }
        }
        
getWeatherForecast();
getWeatherData();





    