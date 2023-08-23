import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function CurrentWeather(props) {
  return (
    <div className="row">
      <div className="col-6 m-auto p-0">
        <WeatherIcons iconCode={props.data.icon} />
        <span>{props.data.temperature}°</span>
        <button>C</button>
        <button>F</button>
      </div>
      <div className="col-6">
        <ul>
          <li className="text-capitalize">{props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} Km/h</li>
        </ul>
      </div>
    </div>
  );
}
