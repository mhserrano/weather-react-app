import React, { useState } from "react";

import "./Forecast.css";
import ForecastDay from "./ForecastDay";

import axios from "axios";
export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
    console.log(response);
  }

  if (loaded) {
    return (
      <div className="row forecast">
        <div className="col">
          <ForecastDay forecastData={forecast} />
        </div>{" "}
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lat;
    let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
