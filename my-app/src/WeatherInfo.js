import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <br />
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              Humidity: <span className="value">{props.data.humidity}%</span>
            </li>
            <li>
              Wind: <span className="value">{props.data.wind} km/h</span>
            </li>
          </ul>
        </div>
        <div
          className="col-6"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            style={{ marginRight: "10px" }}
          />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
