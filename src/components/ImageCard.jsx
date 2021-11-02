import React, { useState } from 'react';
import Heart from "react-heart"

// review fetch. interpolate id. there is a semi colon
export default function ImageCard({image}) {
    const [active, setActive] = useState(false)

    function handleClick() {
        setActive(!active)
        
        const configurationObject = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
                file: image.file,
                liked: active ? "false" : "true",
              })
          }; 

          fetch(`http://localhost:3000/coffees/${image.id}`, configurationObject)
            .then(function(response) {
            return response.json();
            })
            .then((data) => {
                console.log(data);
              });

     }
        
        
    return (
        <div>
            <img style={{height:'175px', width:'200px'}} src={image.file} alt={""} id={image.id}/>
            <div style={{ width: "2rem" }}>
			<Heart isActive={active} onClick={handleClick}/>  
		    </div>
        </div>
    )
}