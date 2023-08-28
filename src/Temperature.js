import React from "react";

export default function Temperature(props) {
  let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);

  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }
  if (props.unit === "celsius") {
    return (
      <span className="d-block">
        <span className="temperature">{props.celsius}°</span>
        <button onClick={showFahrenheit}>C</button>
      </span>
    );
  } else {
    return (
      <span className="d-block">
        <span className="temperature">{fahrenheit}°</span>

        <button onClick={showCelsius}>F</button>
      </span>
    );
  }
}
