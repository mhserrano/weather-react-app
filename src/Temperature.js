import React from "react";
import { useState } from "react";
export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <span>{props.celsius}°</span>
        <button className="selected">C</button>
        <button onClick={showFahrenheit}>F</button>
      </span>
    );
  } else {
    return (
      <span>
        <span>{fahrenheit}°</span>
        <button onClick={showCelsius}>C</button>
        <button className="selected">F</button>
      </span>
    );
  }
}
