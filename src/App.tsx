import React, { useState } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import WeatherCard from './Components/WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  interface WeatherData {
    humidity: number;
    pressure: number;
    isRaining: boolean;
    date: string;
    location: string;
    temperature: number;
    weatherCondition: string;
  }

  const handleWeatherData = (data: WeatherData) => {
    setWeatherData(data);
  }

  const headerProps = {
    title: 'Weather App',
  }

  return (
    <div className="App">
      <Header {...headerProps} />
      <SearchBar onWeatherData={handleWeatherData} />
      {weatherData && (
        <WeatherCard
          location={weatherData.location}
          date={weatherData.date}
          temperature={weatherData.temperature}
          weatherCondition={weatherData.weatherCondition}
          humidity={weatherData.humidity}
          pressure={weatherData.pressure}
          isRaining={weatherData.isRaining}
        />
      )}
    </div>
  );
}

export default App;
