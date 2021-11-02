import React from 'react';
import ImageContainer from "./ImageContainer";

function Home({images}) {
  
    return(
        <div>
            <p>Browse the coffees and heart your favorites!</p>
            <ImageContainer images={images} />
        </div> 

    )
}

export default Home;