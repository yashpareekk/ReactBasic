import React, { useState, useEffect } from 'react';
import './UseEffect.css'

const UseEffect=()=> {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);

      const apiKey = 'c5b1934d0e987eff89cc425c6ff170b1';

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="weather-search-container">
    <h1>Weather Search using UseEffect</h1>
    <input
      type="text"
      placeholder="Enter a city name"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search-input"
    />

    {loading ? <p className="loading-text">Loading...</p> : null}

    {weatherData && !loading && (
      <div className="weather-info">
        <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Weather: {weatherData.weather[0].description}</p>
      </div>
    )}
  </div>
  );
}

export default UseEffect;
