// App.js

import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); // State to store user input

  useEffect(() => {
    // Fetch weather data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (city !== '') {
      fetchData();
    }
  }, [city]);

  return (
    <div className="app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default App;
