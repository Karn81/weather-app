function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
      alert('Please enter a city');
      return;
    }
  
    fetch(`weather.php?city=${city}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          document.getElementById('result').innerHTML = `<p>${data.error}</p>`;
        } else {
          const temp = data.main.temp;
          const weather = data.weather[0].description;
          const icon = data.weather[0].icon;
          document.getElementById('result').innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon" />
            <p>${weather}</p>
            <p>${temp}°C</p>
          `;
        }
      })
      .catch(err => {
        document.getElementById('result').innerHTML = `<p>Failed to fetch data.</p>`;
      });
  }
  