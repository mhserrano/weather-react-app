import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

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
  function search() {
    const apiKey = "1a2b7258ebd456c01aef9175dfe8b709";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="weather-description">
        <form className="search-form">
          <input
            className="city-search"
            type="text"
            placeholder="Search for your city"
            autoComplete="off"
            autoFocus="on"
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
        <div className="row">
          <div className="col-6 m-auto p-0">
            <img
              src="https://help.apple.com/assets/640A52196275DE31D4371B5E/640A52226275DE31D4371B8B/pt_PT/575900edccbc7def167f7874c02aeb0b.png"
              alt="icon"
            />
            <span>{weatherData.temperature}°</span>
            <button>C</button>
            <button>F</button>
          </div>
          <div className="col-6">
            <ul>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} Km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
