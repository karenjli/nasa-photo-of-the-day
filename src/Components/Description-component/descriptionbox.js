import React, { useState, useEffect } from "react";
import axios from "axios";
import Description from "./description";

export default function DescriptionBox () {
    const [date, setDate] = useState([]);
    const [title, setTitle] = useState([]);
    const [explanation, setExplanation] = useState([]);

    useEffect(()=>{
        axios
            .get (`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)  
            .then (response => {
                console.log(response);
                setDate (response.data.date);
                setTitle (response.data.title);
                setExplanation (response.data.explanation);
            })
            .catch(error => {
                console.log(error);
            })
        }, []);

        return (
            <div>
               <Description title = {title} date = {date} explanation = {explanation} />
            </div>
        )

    
};

