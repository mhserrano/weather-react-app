import React from "react";
import "./Forecast.css";
export default function Forecast() {
  return (
    <div className="row forecast">
      <div className="col-sm-3 col-6">
        <p>Wednesday</p>
        <img src="/" alt="logo" />
        <p>14° | 22°</p>
      </div>
      <div className="col-sm-3 col-6">
        <p>Thursday</p>
        <img src="/" alt="logo" />
        <p>14° | 22°</p>
      </div>
      <div className="col-sm-3 col-6">
        <p>Friday</p>
        <img src="/" alt="logo" />
        <p>14° | 22°</p>
      </div>
      <div className="col-sm-3 col-6">
        <p>Saturday</p>
        <img src="/" alt="logo" />
        <p>14° | 22°</p>
      </div>
    </div>
  );
}
