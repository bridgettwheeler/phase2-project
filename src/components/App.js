import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Favorites from "./Favorites";




function App() {
  const [images, setImages] = useState([])
  useEffect (() => {
    fetch("http://localhost:3000/coffees")
    .then(res => res.json())
    .then(setImages)
  
  }, [])
  
  return (    
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Favorites">
          <Favorites />
        </Route>
        <Route exact path="/">
          <Home images={images}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
