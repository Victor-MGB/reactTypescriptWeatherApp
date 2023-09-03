import React from 'react';
import '../Styles/WeatherCard.css'
interface WeatherCardProps{
    humidity:number;
    pressure:number;
    isRaining:boolean;
    date:string;
    location:string;
    temperature:number;
    weatherCondition:string
}
const WeatherCard:React.FC<WeatherCardProps>=({
  location,
  date,
  temperature,
  weatherCondition,
  humidity,
  pressure,
  isRaining
})=>{
    return(
        <main>
            <section>
                <div className="weather-card">
                    <div className="weather-header">
                        <h2>{location}</h2>
                        <div className="date">{date}</div>
                    </div>
                    <div className="weather-details">
                        <div className="temperature">
                            <span className="temperature-value">{temperature}</span>
                            <span className="weather-condition">{weatherCondition}</span>
                        </div>

                        <div className="additional-info">
                            <div className="humidity">
                                Humidity:{humidity}%
                            </div>
                            <div className="pressure">
                                pressure:{pressure} hpa
                            </div>

                            <div className="weather-image">
                                {isRaining ? (
                                    <img src="https://cdn-icons-png.flaticon.com/512/116/116251.png" alt="Rainy" />
                                ):(
                                    <img src="https://www.freeiconspng.com/thumbs/sunny-icon/sunny-icon-0.png" alt="sunny" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default WeatherCard;