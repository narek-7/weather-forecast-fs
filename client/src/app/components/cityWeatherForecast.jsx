import React from "react";
import InputCity from "./inputCity";

const CityWeatherForecast = ({ cityData }) => {
   let weatherIcon = "";

   const kelvinToCelsiusCoverter = (kelvin) => {
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
         <div className="weatherForecast">
            <img src={handleIcon()} alt="" />
            <h2>
               {cityData.name}, {cityData.sys.country}
            </h2>
            <h1>{kelvinToCelsiusCoverter(cityData.main.temp)}</h1>
            <div>
               Feel likes {kelvinToCelsiusCoverter(cityData.main.feels_like)}
               {", "}
               {cityData.weather[0].description}
            </div>
         </div>
      );
   }
};

export default CityWeatherForecast;
