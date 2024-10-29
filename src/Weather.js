import React from "react";
import { useState } from "react";
import axios from "axios";
import "./styles/Weather.css";
import FormattedDate from "./FormattedDate";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time),
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
    });
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    const apiKey = "26fa1d65306c6427fb2f815to8d8b867";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const apiKey = "26fa1d65306c6427fb2f815to8d8b867";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  if (weatherData.ready) {
    return (
      <div>
        <div className="weather-description">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              className="city-search"
              type="text"
              placeholder="Search for your city"
              autoComplete="off"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input className="submit-button" type="submit" value="Submit" />
            <input
              className="current-location"
              type="button"
              value="📍 Your Location"
              onClick={getCurrentLocation}
            />
          </form>
          <div className="location">
            <h1>{weatherData.city}</h1>
            <FormattedDate date={weatherData.date} />
          </div>
          <CurrentWeather data={weatherData} unit={unit} setUnit={setUnit} />
        </div>
        <Forecast
          coordinates={weatherData.coordinates}
          unit={unit}
          setUnit={setUnit}
        />
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
