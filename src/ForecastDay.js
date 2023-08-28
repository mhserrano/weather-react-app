import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = props.forecastData.temp.max;
    return `${Math.round(temperature)}°`;
  }
  function minTemperature() {
    let temperature = props.forecastData.temp.min;
    return `${Math.round(temperature)}°`;
  }
  function day() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.forecastData.dt * 1000);
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div>
      <div>{day()}</div>
      <WeatherIcons iconCode={props.forecastData.weather[0].icon} size={38} />
      <div className="temperatures m-0">
        <span>{maxTemperature()}</span> | {""}
        <span>{minTemperature()}</span>
      </div>
    </div>
  );
}
