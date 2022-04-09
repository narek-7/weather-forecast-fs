import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
   return (
      <ul className="nav justify-content-left mt-4 p-3">
         <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">
               Main
            </Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/Login">
               Login
            </Link>
         </li>
         <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/Register">
               Register
            </Link>
         </li>
      </ul>
   );
};

export default NavBar;
