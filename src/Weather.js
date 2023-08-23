import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import CurrentWeather from "./CurrentWeather";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
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
    const apiKey = "1a2b7258ebd456c01aef9175dfe8b709";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
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
          />
        </form>
        <div className="location">
          <h1>{weatherData.city}</h1>
          <FormattedDate date={weatherData.date} />
        </div>
        <CurrentWeather data={weatherData} />
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
