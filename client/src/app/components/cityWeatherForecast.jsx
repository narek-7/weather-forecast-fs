import React from "react";
import InputCity from "./inputCity";

const CityWeatherForecast = ({ city }) => {
   const handleCityInfo = () => {
      if (city) {
         console.log(city);
      }
   };

   return <div>{handleCityInfo()}</div>;
};

export default CityWeatherForecast;
