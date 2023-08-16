import React from "react";

export default function Weather() {
  return (
    <div className="weather-description">
      <form className="search-form">
        <input
          className="city-search"
          type="text"
          placeholder="Search for your city"
          autoComplete="off"
          autoFocus="on"
        />
        <input className="submit-button" type="submit" value="Submit" />
        <input
          className="current-location"
          type="button"
          value="📍 Your Location"
        />
      </form>
      <div className="location">
        <h1>Porto</h1>
        <h2>Tuesday, 01 August 2023</h2>
        <h2>15h11</h2>
      </div>
      <div className="row">
        <div className="col-6 m-auto p-0">
          <img
            src="https://help.apple.com/assets/640A52196275DE31D4371B5E/640A52226275DE31D4371B8B/pt_PT/575900edccbc7def167f7874c02aeb0b.png"
            alt="icon"
          />
          <span>22°</span>
          <button>C</button>
          <button>F</button>
        </div>
        <div className="col-6">
          <ul>
            <li>Clear Sky</li>
            <li>Humidity: 20%</li>
            <li>Wind: 3 Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
