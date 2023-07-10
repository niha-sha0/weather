import React, { useState, useEffect } from "react";
import "./current-weather.css";
import { ReactComponent as HighIcon } from "../../assets/high-icon.svg";
import { ReactComponent as LowIcon } from "../../assets/low-icon.svg";
import { ReactComponent as Humidity } from "../../assets/humidity-icon.svg";
import { ReactComponent as Wind } from "../../assets/wind-icon.svg";
import { ReactComponent as Pressure } from "../../assets/pressure-icon.svg";
import { ReactComponent as CloudyIcon } from '../../assets/weather-images/cloudy.svg';
import { ReactComponent as HazeIcon } from '../../assets/weather-images/haze.svg';
import { ReactComponent as HeavyRainIcon } from '../../assets/weather-images/heavy-rain.svg';
import { ReactComponent as PartlyCloudyIcon } from '../../assets/weather-images/partly-cloudy.svg';
import { ReactComponent as RainIcon } from '../../assets/weather-images/rain.svg';
import { ReactComponent as SleetIcon } from '../../assets/weather-images/sleet.svg';
import { ReactComponent as SnowIcon } from '../../assets/weather-images/snow.svg';
import { ReactComponent as SunnyIcon } from '../../assets/weather-images/sunny.svg';
import { ReactComponent as ThunderstormIcon } from '../../assets/weather-images/thunderstorm.svg';
import axios from "axios";

const CurrentLocation = () => {

  const [currentLocation, setCurrentLocation] = useState(null);
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    // Fetch current location data
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
        fetchCityName(latitude, longitude);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const fetchCityName = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e705fbfcf48b118ee65753a961895863`
      );
      const city = response.data.name;
      setCityName(city);
      setWeatherData(response.data);
      setWeatherIcon(getWeatherIcon(response.data.weather[0].id));
    } catch (error) {
      console.error(error);
    }
  };

  const getWeatherIcon = (weatherId) => {
     if(weatherId == 800)
     {
        return <SunnyIcon />;
     }
     else if(weatherId == 801 || weatherId == 802)
     {
        return <PartlyCloudyIcon />;
     }
     else if(weatherId == 803 || weatherId == 804)
     {
        return <CloudyIcon />;
     }
     else if(weatherId == 500 || weatherId == 501 || weatherId == 520 || weatherId == 521 || weatherId == 511)
     {
        return <RainIcon />;
     }
     else if(weatherId == 502 || weatherId == 503 || weatherId == 504 || weatherId == 522 || weatherId == 531)
     {
        return <HeavyRainIcon />;
     }
     else if(weatherId == 300 || weatherId == 301 || weatherId == 302 || weatherId == 310 || weatherId == 311 || weatherId == 312 || weatherId == 313 || weatherId == 314 || weatherId == 321)
     {
        return <RainIcon />;
     }
     else if(weatherId == 200 || weatherId == 201 || weatherId == 202 || weatherId == 210 || weatherId == 211 || weatherId == 212 || weatherId == 221 || weatherId == 230 || weatherId == 231 || weatherId == 232)
     {
        return <ThunderstormIcon />;
     }
     else if(weatherId == 600 || weatherId == 601 || weatherId == 602 || weatherId == 612 || weatherId == 613 || weatherId == 615 || weatherId == 616 || weatherId == 620 || weatherId == 621 || weatherId == 622)
     {
        return <SnowIcon />;
     }
     else if(weatherId == 611)
     {
        return <SleetIcon />;
     }
     else if(weatherId == 701 || weatherId == 711 || weatherId == 721 || weatherId == 731 || weatherId == 741 || weatherId == 751 || weatherId == 761 || weatherId == 762 || weatherId == 771 || weatherId == 781)
     {
      return <HazeIcon />;
     }
     else {
       return <SunnyIcon />
     }
  }

  if (!currentLocation || !cityName || !weatherIcon) {
    return <div>Loading...</div>;
  }
  
  const { main, weather, wind, sys } = weatherData;

  return (
    <>
      <div className="currentData">
        <div className="current-data">
          <h4 className="current-text">Current Weather</h4>
          <h3 className="city-name">{cityName}</h3>
          <div className="weathericonstyle">
            <h1 className="weathericondesign">{weatherIcon}</h1>
            <p className="temperature-text">{main.temp}°C</p> 
          </div>
          <p className="temp-text3"> {weather[0].description}</p>
      </div>
      <div className="temperature">
        <p>Feels like {weatherData.main.feels_like}°C</p>
        <div className="min-max-temp">
          <HighIcon className="svg-icons" />
          <p className="temp-text2">{main.temp_max}</p>
          <LowIcon className="svg-icons" />
          <p className="temp-text2">{main.temp_min}</p>
        </div>
        <div className="table">
          <Humidity className="svg-icons" />
          <p className="temp-text">Humidity</p>
          <p className="temp-text2">{main.humidity}%</p>
        </div>
        <div className="table">
          <Wind className="svg-icons" />
          <p className="temp-text">Wind</p>
          <p className="temp-text2">{wind.speed} m/s</p>
        </div>

        <div className="table">
          <Pressure className="svg-icons" />
          <p className="temp-text">Pressure</p>
          <p className="temp-text2">{main.pressure} hPa</p>
        </div>
      </div>
      </div>

      <div>
      <h2>Current Location</h2>
      <p>Latitude: {currentLocation.latitude}</p>
      <p>Longitude: {currentLocation.longitude}</p>
      {/* Display weather information or perform other actions */}
    </div>
    </>
  )
}

export default CurrentLocation;