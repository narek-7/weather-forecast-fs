import React, { useState } from "react";
import InputCity from "../components/inputCity";
import CityWeatherForecast from "../components/cityWeatherForecast";

const Main = () => {
   const API_KEY = "9196bd0d6ab62e92bd8c460a1c05cc10";
   const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}";

   const [city, setCity] = useState("");
   const [message, setMessage] = useState("");

   const handleSearch = async (e) => {
      if (e.target.value.trim()) {
         const api_url = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${API_KEY}`
         );
         const data = await api_url.json();
         const dataCode = Number(data.cod);

         if (dataCode === 404) {
            setMessage(data.message);
            setCity("");
         } else if (dataCode < 200 || dataCode > 300) {
            setMessage("the server is currently unavailable, please try again later.");
            setCity("");
         } else {
            setMessage("");
            setCity(data);
         }
      }
   };

   return (
      <div>
         <InputCity handleSearch={handleSearch} />
         <h2>{message}</h2>
         <CityWeatherForecast city={city} />
      </div>
   );
};

export default Main;
