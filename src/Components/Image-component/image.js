import React from "react";
import styled from "styled-components"


const Image = (props) => {
    const SpacePic = styled.img`
        width: 100%;
        object-fit: contain;
    `;
    
    return (
        <div className = "picture">
            <SpacePic src = {props.img} alt = "Photo of the Day"></SpacePic>
        </div>
    )
};

export default Image;