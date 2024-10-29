import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecastData.temperature.maximum);
    let fahrenheit = Math.round((temperature * 9) / 5 + 32);

    if (props.unit === "celsius") {
      return `${temperature}°`;
    } else {
      return `${fahrenheit}°`;
    }
  }
  function minTemperature() {
    let temperature = Math.round(props.forecastData.temperature.minimum);
    let fahrenheit = Math.round((temperature * 9) / 5 + 32);
    if (props.unit === "celsius") {
      return `${temperature}°`;
    } else {
      return `${fahrenheit}°`;
    }
  }
  function day() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.forecastData.time * 1000);
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
