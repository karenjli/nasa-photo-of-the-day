import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "./image";

export default function ImageBox () {
    const [img, setImg] = useState([]);
   

    useEffect(()=>{
        axios
            .get (`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)  
            .then (response => {
                console.log(response);
                setImg (response.data.hdurl);
            })
            .catch(error => {
                console.log(error);
            })
        }, []);

        return (
            <div>
               <Image img = {img} />
            </div>
        )

    
};

