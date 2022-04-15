import React from "react";
import InputCity from "./inputCity";

const CityWeatherForecast = ({ cityData }) => {
   let weatherIcon = "";

   const kelvinToCelsiusConverter = (kelvin) => {
      return Math.round(Number(kelvin) - 273.15) + "°C";
   };

   const handleIcon = () => {
      weatherIcon = cityData.weather[0].icon;
      const icon_url = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      console.log(cityData);
      return icon_url;
   };

   if (cityData) {
      return (
         <>
            <div className="weather-forecast">
               <h2>
                  {cityData.name}, {cityData.sys.country}
               </h2>
               <img src={handleIcon()} alt="" />
               <span className="main-temp">
                  {kelvinToCelsiusConverter(cityData.main.temp)}
               </span>
               <h5>
                  Feel likes {kelvinToCelsiusConverter(cityData.main.feels_like)}
                  {", "}
                  {cityData.weather[0].description}
               </h5>
               <div>humidity: {cityData.main.humidity}%</div>
               <div>visibility: {Number(cityData.visibility) / 1000}km</div>
               <div>pressure: {cityData.main.pressure}hPa</div>
               <div>wind: {cityData.wind.speed}m/s</div>
            </div>
         </>
      );
   }
};

export default CityWeatherForecast;
