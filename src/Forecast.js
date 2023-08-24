import React from "react";
import "./Forecast.css";
export default function Forecast() {
  return (
    <div className="row forecast">
      <div className="col">
        <div>Wed</div>
        <img src="/" alt="logo" />
        <div className="temperatures">
          <span>14°</span> | <span>22°</span>
        </div>
      </div>{" "}
    </div>
  );
}
