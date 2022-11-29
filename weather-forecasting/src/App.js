import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6144f04b71b27e6cc5983b2abf637867`;

  const searchCity = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City"
          onKeyPress={searchCity}
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <h1>{Math.round(data.main?.temp - 273.15)}℃</h1>
          </div>
          <div className="desc">
            <p className="big">
              {data.weather ? data.weather[0].main : "Clouds"}
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="big">{Math.round(data.main?.feels_like - 273.15)}℃</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className="big">{Math.round(data.main?.humidity)}</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="big">
              {Math.round(data.wind?.speed)} MPH {data.wind?.deg} Deg{" "}
            </p>
            <p>Wind</p>
          </div>
        </div>
        <div className="footer">
          <p>Developed by</p>
          <p> <a href="https://github.com/jayaprakash27">Jayaprakash Sahoo</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
