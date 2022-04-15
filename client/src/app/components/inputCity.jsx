import React, { useState, useEffect } from "react";

const InputCity = ({ handleSearch }) => {
   return (
      <div className="">
         <div className="input-group input-group-lg">
            <input
               type="text"
               className="form-control mt-5 text-primary placeholder-primary mb-5"
               name="name"
               placeholder="Enter the name of the city..."
               required
               onChange={handleSearch}
               
            />
         </div>
         {/* <button className="btn btn-primary" type="submit">
               Search
            </button> */}
      </div>
   );
};

export default InputCity;
