import React from "react";
import Main from "./layouts/main";
import CityWeatherForecast from "./components/cityWeatherForecast";
import Login from "./layouts/login";
import Register from "./layouts/register";
import FavoriteCities from "./components/favoriteCities";
import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";

function App() {
   return (
      <div className="container">
         <NavBar />
         <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/user/cityName?" component={Register} />
            <Route path="/user" component={User} />
            <Route path="/cityName?" component={Main} />
            <Route path="/" component={Main} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
         </Switch>
      </div>
   );
}

export default App;
