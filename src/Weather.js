import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h2>Tuesday 05:17 PM</h2>
      <br />
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-info w-100"
            ></input>
          </div>
        </div>
      </form>
      <br />
      <h1>Phoenix</h1>
      <div className="row">
        <div className="col-6">
          <br />
          <ul>
            <li>Overcast cloudy</li>
            <li>
              Precipitation: <span className="value">15%</span>
            </li>
            <li>
              Humidity: <span className="value">30%</span>
            </li>
            <li>
              Wind: <span className="value">1 mph</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="Overcast cloudy"
          />
          <span className="temperature">74</span>
          <span className="unit">°F</span>
        </div>
      </div>
    </div>
  );
}
