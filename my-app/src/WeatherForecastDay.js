import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    // Access the 'maximum' temperature from the 'temperature' object
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
      />

      <div className="weather-data-temperatures">
        <span className="weather-temperature-max">{maxTemperature()}</span>
        <span className="weather-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
