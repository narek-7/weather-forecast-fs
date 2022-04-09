import React, { useEffect, useState } from "react";

const Register = () => {
   const passMInSize = 8;
   const [user, setUser] = useState({ email: "", password: "" });
   const [error, setErrors] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   const toggleShowPassword = () => {
      setShowPassword((prevState) => !prevState);
   };
   
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user);
   };

   const handleChange = (e) => {
      setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
   };

   return (
      <div className="">
         <h1>Register</h1>
         <form action="/" method="post" className="mb-2">
            <div className="form-group mb-2">
               <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  className="form-control"
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="input-group">
               <input
                  type="password"
                  id="password"
                  value={user.password}
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  required
               />
               <button
                  class="btn btn-outline-primary"
                  type="button"
                  onClick={toggleShowPassword}
               >
                   {showPassword ? "Hide" :"Show" }
               </button>
            </div>
            {user.password && user.password.length < 8 ? (
               <div class="invalidForm">password must be at least 8 characters long</div>
            ) : null}
            {error ? (
               <div class="invalidForm">
                  Email or password entered incorrectly, try again
               </div>
            ) : null}
            <button
               className="btn btn-primary mt-3"
               type="submit"
               onClick={handleSubmit}
               disabled={user.password.length < 8 || !user.email}
            >
               Register
            </button>
         </form>
      </div>
   );
};

export default Register;
