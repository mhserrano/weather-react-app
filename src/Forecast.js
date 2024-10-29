import React, { useState, useEffect } from "react";

import "./styles/Forecast.css";
import ForecastDay from "./ForecastDay";

import axios from "axios";
export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="row forecast">
        {forecast.map(function (day, index) {
          if (index > 0 && index <= 5) {
            return (
              <div className="col" key={index}>
                <ForecastDay
                  forecastData={day}
                  unit={props.unit}
                  setUnit={props.setUnit}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiKey = "26fa1d65306c6427fb2f815to8d8b867";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
