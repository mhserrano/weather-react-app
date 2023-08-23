import React from "react";

export default function CurrentWeather(props) {
  return (
    <div className="row">
      <div className="col-6 m-auto p-0">
        <img
          src="https://help.apple.com/assets/640A52196275DE31D4371B5E/640A52226275DE31D4371B8B/pt_PT/575900edccbc7def167f7874c02aeb0b.png"
          alt="icon"
        />
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
