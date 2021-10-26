import React from 'react';

export default function ImageCard({image}) {
    return (
        <div>
            <img style={{height:'100px', width:'100px'}} src={image.file} alt={""}/>
        </div>
    )
}