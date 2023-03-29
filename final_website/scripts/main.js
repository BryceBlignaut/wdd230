function getWeatherData() {
    const url = "https://api.openweathermap.org/data/2.5/onecall?lat=33.1581&lon=117.3506&exclude=daily&appid=171ea32f53ca0e2d81b73ecd6f2bca54";
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Retrieve the current temperature and humidity
        const currentTemp = data.current.temp;
        const currentHumidity = data.current.humidity;
        
        // Retrieve the three day weather forecast
        const forecast = data.hourly.slice(0, 24*3); // Retrieve the next 3 days (72 hours)
        
        // Populate the data onto the webpage
        document.getElementById("temp").textContent = currentTemp + " °F";
        document.getElementById("humidity").textContent = currentHumidity + " %";
        
        const forecastList = document.getElementById("forecast");
        forecast.forEach(hourData => {
          const li = document.createElement("li");
          const time = new Date(hourData.dt * 1000);
          const temp = hourData.temp;
          li.textContent = time.toLocaleString() + ": " + temp + " °F";
          forecastList.appendChild(li);
        });
      })
      .catch(error => console.error(error));
  }
  
  getWeatherData();
  