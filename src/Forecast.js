import React from "react";
import "./Forecast.css";
import WeatherIcons from "./WeatherIcons";
export default function Forecast() {
  return (
    <div className="row forecast">
      <div className="col">
        <div>Wed</div>
        <WeatherIcons iconCode="01d" size={38} />
        <div className="temperatures m-0">
          <span>14°</span> | <span>22°</span>
        </div>
      </div>{" "}
    </div>
  );
}
