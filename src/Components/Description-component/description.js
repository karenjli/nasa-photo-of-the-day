import React from "react";

const Description = (props) => {
    return (
        <div className = "picInfo">
            <h2 className = "picName">{props.title}</h2>
            <h4 class ="picDate">{props.date}</h4>
            <p class="picDetail">{props.explanation}</p>
        </div>
    )
};

export default Description;