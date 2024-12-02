import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
      date: "Tuesday 05:17 PM",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h2>{weatherData.date}</h2>
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
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className="col-6">
            <br />
            <ul>
              <li className="text-capitalize">{weatherData.description}</li>

              <li>
                Humidity: <span className="value">{weatherData.humidity}%</span>
              </li>
              <li>
                Wind: <span className="value">{weatherData.wind} mph</span>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "73453af9f4a0a21aof85fet5591b1ffd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
