import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Phoenix" />
        <footer>
          This website was coded by Lauren D'Alessio and is{" "}
          <a
            href="https://github.com/LDalessio/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
