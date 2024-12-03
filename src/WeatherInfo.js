import react from "react";

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
          <span className="temperature">
            {Math.round(prosp.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}
