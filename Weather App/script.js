let fetchWeather = () => {

    let cityName = document.getElementById("cityName").value;

    let weatherImg = document.getElementById("weatherImg");
    let temperature = document.getElementById("temp");
    let city = document.getElementById("city");
    let humidity = document.getElementById("humidity");
    let windSpeed = document.getElementById("windSpeed");

    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?&appid=d2dc9bf57db5d4fc46b5ba1d7c9c762c&units=metric";

    let checkWeather = async () => {
      try{
      const response = await fetch(`${apiUrl}&q=${cityName}`);
      var data = await response.json();
      console.log(data);
    
    return data
    }catch(error){
      alert("couldn't fetch the weather data please check the city name and try again");
      return null;
    } 
  };
  
    checkWeather().then((data) => {
      if (data) {
        let weather = data.weather[0].main.toLowerCase();

        if (weather === "clouds") {
          weatherImg.src = "images/clouds.png";
        } else if (weather === "rain") {
          weatherImg.src = "images/rain.png";
        } else if (weather === "mist") {
          weatherImg.src = "images/mist.png";
        } else if (weather === "clear"){
          weatherImg.src = "images/clear.png";
        }else if (weather === "drizzle"){
          weatherImg.src = "images/drizzle.png";
        }else if (weather === "snow"){
          weatherImg.src = "images/snow.png";
        }

        city.innerText = data.name;
        temperature.innerText= `${data.main.temp}°c`;
        humidity.innerText = data.main.humidity;
        windSpeed.innerText = data.wind.speed;
        document.getElementById("cityName").value = ""
        



      }
    });
  };