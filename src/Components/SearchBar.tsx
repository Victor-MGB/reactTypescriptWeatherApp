import React, { useState } from 'react';
import '../Styles/SearchBar.css'

interface SearchBarProps {
  onWeatherData: (data: WeatherData) => void;
}

interface WeatherData {
  humidity: number;
  pressure: number;
  isRaining: boolean;
  date: string;
  location: string;
  temperature: number;
  weatherCondition: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onWeatherData }) => {
  const [location, setLocation] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    const apiKey = 'f9e6a939997948228d035444230209';
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('Weather data:', data);

        const weatherData: WeatherData = {
          location: data.location.name,
          date: data.current.last_updated,
          temperature: data.current.temp_c,
          weatherCondition: data.current.condition.text,
          humidity: data.current.humidity,
          pressure: data.current.pressure_mb,
          isRaining: data.current.precip_mm > 0,
        };

        onWeatherData(weatherData);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  return (
    <main>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleInputChange}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
    </main>
  );
};

export default SearchBar;
