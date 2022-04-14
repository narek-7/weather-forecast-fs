import React, { useState, useEffect } from "react";

const InputCity = ({ handleSearch }) => {
   return (
      <div className="">
         <form action="/" method="post" className="mb-2">
            <div className="form-group mb-2">
               <input
                  type="text"
                  className="form-control mt-2"
                  name="name"
                  placeholder="Enter the name of the city..."
                  required
                  onChange={handleSearch}
               />
            </div>
            {/* <button className="btn btn-primary" type="submit">
               Search
            </button> */}
         </form>
      </div>
   );
};

export default InputCity;
