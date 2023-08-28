import React, { useState, useEffect } from "react";

import "./Forecast.css";
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
                <ForecastDay forecastData={day} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
