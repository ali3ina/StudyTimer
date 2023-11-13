// WeatherCard.js

import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
  const { main, name, sys, weather } = weatherData;

  return (
    <div className="weather-card">
      <h2>{name}, {sys.country}</h2>
      <div>
        <strong>Temperature:</strong> {main.temp} K
      </div>
      <div>
        <strong>Weather:</strong> {weather[0].description}
      </div>
    </div>
  );
};

export default WeatherCard;
