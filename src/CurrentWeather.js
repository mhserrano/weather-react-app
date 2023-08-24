import React from "react";
import WeatherIcons from "./WeatherIcons";
import Temperature from "./Temperature";

export default function CurrentWeather(props) {
  return (
    <div className="row mt-4">
      <div className="col-7 m-auto p-0">
        <WeatherIcons iconCode={props.data.icon} />
        <Temperature celsius={props.data.temperature} />
      </div>
      <div className="col-5 p-0">
        <ul>
          <li className="text-capitalize">{props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} Km/h</li>
        </ul>
      </div>
    </div>
  );
}
