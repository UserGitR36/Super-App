import React from 'react';
import './Weathercard.css';

const weatherData = {
  "count": 1,
  "data": [
    {
      "app_temp": 63.8,
      "aqi": 46,
      "city_name": "Raleigh",
      "clouds": 0,
      "country_code": "US",
      "datetime": "2023-04-16:03",
      "dewpt": 59.3,
      "dhi": 0,
      "dni": 0,
      "elev_angle": -33.97,
      "ghi": 0,
      "gust": null,
      "h_angle": -90,
      "lat": 35.7721,
      "lon": -78.63861,
      "ob_time": "2023-04-16 03:30",
      "pod": "n",
      "precip": 0,
    
   
      "slp": 1014.9,
      "snow": 0,
      "solar_rad": 0,
      "sources": [
        "1327W"
      ],
      "state_code": "NC",
      "station": "1327W",
      "sunrise": "10:40",
      "sunset": "23:49",
     
      "timezone": "America/New_York",
      "ts": 1681615800,
      "uv": 0,
      "vis": 9.9,
      "weather": {
        "icon": "c01n",
     
        "code": 800
      },
      "wind_cdir": "SW",
      "wind_cdir_full": "southwest",
      "wind_dir": 230,
     
    }
  ]
};

const WeatherCard = () => {
  const currentTime = new Date();

  const weather = weatherData.data[0];

  return (
    <div className="weather-card">
      <div className="header">
        <span className="date">{currentTime.toLocaleDateString()}</span>
        <span className="time">{currentTime.toLocaleTimeString()}</span>
      </div>
      {weather && (
        <div className="weather-details">
          <div className="weather-icon">
            <img src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`} alt="weather icon" />
          </div>
          <div className="temperature">{weather.temp}25°C</div>
          <div className="weather-stats">
            <div className="condition">{weather.weather.description} Cloudy</div>
            <div className="pressure">Pressure: {weather.pres} 1003.7 mbar</div>
            <div className="wind">Wind: {weather.wind_spd} 11km/h</div>
            <div className="humidity">Humidity: {weather.rh} 84%</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;





