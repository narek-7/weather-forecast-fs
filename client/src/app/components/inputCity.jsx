import React from "react";

const InputCity = () => {
   return (
      <div className="">
         <form action="/" method="post" className="mb-2">
            <div className="form-group mb-2">
               <input type="text" className="form-control mt-2" name="name" placeholder="Enter the name of the city" required />
            </div>
            <button className="btn btn-primary" type="submit">
               Search
            </button>
         </form>
      </div>
   );
};

export default InputCity;
