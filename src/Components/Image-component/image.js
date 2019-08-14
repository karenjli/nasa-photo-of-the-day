import React from "react";

const Image = (props) => {
    return (
        <div className = "picture">
            <img src = {props.img}></img>
        </div>
    )
};

export default Image;