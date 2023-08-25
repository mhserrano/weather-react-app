import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function ForecastDay(props) {
  console.log(props.forecastData);
  function maxTemperature() {
    let temperature = props.forecastData[0].temp.max;
    return `${Math.round(temperature)}°`;
  }
  function minTemperature() {
    let temperature = props.forecastData[0].temp.min;
    return `${Math.round(temperature)}°`;
  }
  function day() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let date = new Date(props.forecastData[0].dt * 1000);
    let day = days[date.getDay()];
    return day;
  }
  return (
    <div>
      <div>{day()}</div>
      <WeatherIcons
        iconCode={props.forecastData[0].weather[0].icon}
        size={38}
      />
      <div className="temperatures m-0">
        <span>{maxTemperature()}</span> | {""}
        <span>{minTemperature()}</span>
      </div>
    </div>
  );
}
