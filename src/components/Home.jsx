import React from 'react';
import { useEffect, useState } from "react";
import ImageContainer from "./ImageContainer";

function Home() {
  const [images, setImages] = useState([])
  useEffect (() => {
    fetch("http://localhost:3000/coffees")
    .then(res => res.json())
    .then(setImages)
  
  }, [])
    return(
        <div>
            <p>Browse the coffees and heart your favorites!</p>
            <ImageContainer images={images} />
        </div> 

    )
}

export default Home;