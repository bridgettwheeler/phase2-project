import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Favorites from "./Favorites";



function App() {
  
  return (    
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Favorites">
          <Favorites />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
