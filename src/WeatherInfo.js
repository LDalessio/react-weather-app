import react from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(prosp) {
  return (
    <div>
      <h1>{prosp.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <br />
          <ul>
            <li className="text-capitalize">{prosp.data.description}</li>

            <li>
              Humidity: <span className="value">{prosp.data.humidity}%</span>
            </li>
            <li>
              Wind: <span className="value">{prosp.data.wind} mph</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <img src={prosp.data.iconUrl} alt={prosp.data.description} />

          <WeatherTemperature celsius={prosp.data.temperature} />
        </div>
      </div>
    </div>
  );
}
