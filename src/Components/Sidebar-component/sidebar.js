import React from "react";
import styled from "styled-components";


export default function SideBar () {
    const Logo = styled.div`
            font-family: "Space Mono";
            color: white;
            font-size: 34px;
        `;

    const Tagline = styled.div `
            font-family = "Bree Serif";
            color: white;
            font-size: 20px;`

    const Supportbutton = styled.button`
            color: #fc3d21;
            font-size: 12px;
            margin: 1em;
            padding: 0.25em 1em;
            border: 1px solid #fc3d21;
            border-radius: 3px;
            cursor: pointer;
          `;
    
    return (
        
        <div className = "sidebar">
            <Logo>NASA</Logo>
            <Tagline>Photo of the Day</Tagline>
            <div className = "button">
                <a href = "https://nasa.gov"><Supportbutton href = "">Learn More about NASA</Supportbutton></a>
            </div>
        </div>
    )
}